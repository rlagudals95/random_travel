import { DO_MAP } from "@/entities/trip/model/constants";

export function getKeyByValue(value: string) {
    return Array.from(DO_MAP.entries())
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .find(([_, val]) => val === value)?.[0];
}
  