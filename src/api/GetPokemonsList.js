import { GetApiData, apiStates } from '../api/GetApiData';

export const GetPokemonsList = (amount) =>{
    const { state, error, data } = GetApiData(`pokemon`, amount);

    switch (state) {
        case apiStates.ERROR:
            return error || "hubo un error al buscar los datos"
        case apiStates.SUCCESS:
            return data
        default:
            return "loading"
    }
}
