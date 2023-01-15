(() => {
    const fullName = (firstName: string, upper: boolean = false, lastName?: string | boolean): string => {
        
      if (upper) {
        return `${firstName} ${lastName || 'No last name'}`.toUpperCase(); 
      }else{
          return `${firstName} ${lastName || 'No last name'}`;
      }
    };
  
    const name = fullName("Tony", true, 'Stark',);
    console.log({ name });
  })();
  