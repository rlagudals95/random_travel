export const TripModal = () => {
  return (
    <div className="fixed bottom-0 w-full max-w-[430px] hidden">
      <div className="bg-white dark:bg-gray-800 rounded-t-3xl p-6 shadow-lg">
        <div className="w-12 h-1 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-6" />
        <h2 className="text-xl font-bold mb-2">추천된 여행지</h2>
        <div className="space-y-4">
          {/* 여행지 정보가 들어갈 예정 */}
        </div>
      </div>
    </div>
  );
}; 