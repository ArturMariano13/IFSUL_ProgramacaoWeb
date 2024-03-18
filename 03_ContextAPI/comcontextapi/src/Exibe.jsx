import { useContext } from "react";
import AppContext from "./AppContext";

function Exibe(){

    const { media, color } = useContext(AppContext);

    return (
        <>
            {
                media >= 0 &&
                <h1 style={{backgroundColor:color}}>Média: {media}</h1>
            }
        </>
    )
}

export default Exibe;