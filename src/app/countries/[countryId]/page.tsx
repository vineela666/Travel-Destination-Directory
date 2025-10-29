import America from "../america";
import France from "../france";
import Greece from "../greece";
import IndianCities from "../india";

export default async function CountryDetails(
    { params }:
        {
            params:
            Promise<{ countryId: string }>
        }
) {
    const countryId = (await params).countryId

    switch (countryId) {
        case "india":
            return <IndianCities />
            break;

        case "france":
            return <France />
            break;

        case "greece":
            return <Greece />
            break;

        case "america":
            return <America/>
            break;

        default:
            return <h1>Welcome to Travel destination directory</h1>
            break;
    }

}