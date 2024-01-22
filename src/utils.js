export function normalizeHouzeData(data) {
    if (data && Array.isArray(data)) {
      const normalizedData = data.map((item) => {
        const houseColours = item.houseColours
          ? item.houseColours.toLowerCase().split(" ")
          : "";
  
        return {
          id: item.id,
          name: item.name,
          animal: item.animal,
          founder: item.founder,
          startColor: houseColours[0] || "#fff",
          endColor: houseColours[2] || "#000",
        };
      });
     
      return normalizedData;
    } else {
      return data;
    }
  }

