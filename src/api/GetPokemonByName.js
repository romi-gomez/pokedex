import { GetApiData, apiStates } from '../api/GetApiData';

export const GetPokemonByName = (name) =>{
    const { state, error, data } = GetApiData(`pokemon/${name}`);

    switch (state) {
        case apiStates.ERROR:
            return error || "hubo un error al buscar los datos"
        case apiStates.SUCCESS:
            return data
        default:
            return "loading"
    }
}
