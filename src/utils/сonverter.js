export const convertFilterToSearchParams = (filter) => {
   const searchParams = {};

   // Добавляем параметры фильтрации в searchParams
   if (filter.location) {
      // Присваиваем значение location с добавлением страны "Ukraine"
      searchParams.location = `Ukraine, ${filter.location}`;
   }

   // Преобразуем параметры деталей в searchParams
   const detailsParams = {};
   Object.entries(filter.details).forEach(([detail, value]) => {
      if (value) {
         // Если деталь выбрана, добавляем ее в detailsParams
         detailsParams[detail] = value;
      }
   });

   // Добавляем detailsParams в searchParams
   if (Object.keys(detailsParams).length > 0) {
      searchParams.details = detailsParams;
   }

   // Добавляем тип транспортного средства в searchParams
   if (filter.vehicleType) {
      searchParams.vehicleType = filter.vehicleType;
   }

   return searchParams;
};
