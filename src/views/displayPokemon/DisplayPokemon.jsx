import styled from "styled-components";
import { useState, useEffect } from "react";
import { getPokemon, getAllPokemon } from "../../api/Pokemon";
import { ClapSpinner } from "react-spinners-kit";
import { Card } from "../../components/Card/Card";
import PokemonAPIService from "../../api/services/PokemonAPIService";

export const DisplayPokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllPokemon(PokemonAPIService.getURL);
        await loadPokemon(response.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
    
  };
  
  return (
    <>
      <Wrapper>
        <Header> 
        </Header>
        <ViewData>
          <SearchBar>
            <Input placeholder="Search..." type="text" onChange={(event) => setSearch(event.target.value)}/>       
          </SearchBar>
          <div>   
              {loading ? ( <SpinnerDiv> <ClapSpinner size={30} frontColor="#5855d6" backColor="#9d9bef" /> </SpinnerDiv>) : (
                <Container>
                  {pokemonData.filter((pokemon) => {          
                    if (search === "") {
                      return pokemon
                    } else if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
                      return pokemon
                    }
                    return false;
                    })
                    .map((pokemon, i) => {
                      return <Card key={i} value={pokemon} />;
                    })}        
                </Container>
              )}     
          </div>
        </ViewData>
      </Wrapper> 
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 200px;
`;
const Header = styled.div`
  background: #fff;
  border: none;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
  height: 70px;
  display: flex;
  justify-self: center;
`;

const ViewData = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`;
const SearchBar = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  text-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1140px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 962px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 785px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Input = styled.input`
  width: 200px;
  height: 33px;
  white-space: nowrap;
  font-size: 12px;
  padding: 5px;
  margin: 16px 2px;
  outline: none !important;
  border-radius: 4px;
  border: 2px solid #5855d6;
  box-shadow: 0px 6px 15px 1px rgba(88, 85, 214, 0.43);
  transition: all 0.5s;
  &:hover {
    width: 300px;
    transition: all 0.5s;
  }
`;
const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;