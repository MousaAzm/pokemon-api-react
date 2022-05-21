import styled from "styled-components";
import typeColors from "../../assets/typeColors"

export const Card = ({ value }) => {
    return (
        <CardBox>
            <CardImg>
                <img src={value.sprites.front_default} alt="img" />
            </CardImg>
            <CardName>
                {value.name}
            </CardName>
            <CardTypes>
                {
                    value.types.map(type => {
                        return (
                            <CardType style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </CardType>
                        )
                    })
                }
            </CardTypes>
            <CardInfo>
                <CardData>
                    <CardTitle>Weight</CardTitle>
                    <p>{value.weight}</p>
                </CardData>
                <CardData>
                    <CardTitle>Height</CardTitle>
                    <p>{value.height}</p>
                </CardData>
                <CardData>
                    <CardTitle>Ability</CardTitle>
                    <p>{value.abilities[0].ability.name}</p>
                </CardData>
            </CardInfo>
        </CardBox>
    );
}

const CardBox = styled.div`
    background: #fff;
    border-radius: 10px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
    margin: 15px;
    padding: 10px;
`;
const CardImg = styled.div`
    text-align: center;
`;
const CardName = styled.div`
    text-align: center;
    text-transform: capitalize;
    font-weight: 800;
    font-size: 22px;
`;
const CardTypes = styled.div`
    display: flex;
    justify-content: center; 
`;
const CardType = styled.div`
    padding: 5px 10px;
    margin: 10px;
    border-radius: 5px;
    color: #fff;
    text-align: center;
`;
const CardInfo = styled.div`
    margin-left: 10px; 
`;
const CardData = styled.div`
   padding-bottom: 10px;
   text-align: center; 
`;
const CardTitle = styled.p`
   font-weight: 700; 
   padding: 7px;
`;
