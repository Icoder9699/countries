import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import CardList from "../components/CardList";
import Controls from "../components/Controls";
import { ALL_COUNTRIES } from "../config";

export const Home = ({countries, setCountries}) => {
  const [filteredItems, setFilteredItems] = useState(countries);
  const {push} = useHistory();

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }
    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredItems(data);
  };

  useEffect(() => {
    if (!countries.length){
      axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [countries]);

	return (
		<div>
			<Controls onSearch={handleSearch} />
        <CardList>
          {filteredItems.map(country => {
            const data = {
              img: country.flags.png,
              name: country.name,
              info: [
                {
                  title: 'Population',
                  desc: country.population.toLocaleString()
                },
                {
                  title: 'Region',
                  desc: country.region
                },
                {
                  title: 'Capital',
                  desc: country.capital
                }
              ]
            }
            return( 
            <Card 
              {...data} 
							key={country.name} 
              onClick={() => push(`/country/${country.name.toLowerCase()}`)}
						/>)
          })}
			</CardList>
		</div>
	)
}
