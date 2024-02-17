// en esta pagina sera el inicio de la pagina

import { useEffect } from "react";
import { getPersona } from "../api/apiRickAndMorty";
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";

const HomePage = () => {
  //iniciamos los datos de la api
  useEffect(() => {
    getPersona();
  }, []);

  //deseestructuramos la data de react-query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["person"],
    queryFn: getPersona,
  });

  if (isLoading) return <h1>Loading...</h1>;
  else if (isError) return <h1>Error... {error}</h1>;

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 m-1">
      {data
        ? data.map((item) => (
            <div key={item.id}>
              <Card item={item}/>
            </div>
          ))
        : null}
    </div>
  );
};

export default HomePage;
