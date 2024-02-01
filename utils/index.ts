import {CarProps, FilterProps} from "../types";

export async function fetchCars(filters: FilterProps) {

    const { manufacturer, year, limit, fuel, model} = filters

    const headers = {
        'X-RapidAPI-Key': '47c9bcdbf5msh279ff7e414bcfe7p153107jsn6fab71bf8fbd',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=4${year}&model=4${model}&limit=4${limit}&fuel_type=${fuel}`,
        {headers: headers,});

    const result = await response.json();

    return result
}

export const calculateCarRent = (city_mpg, year) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImgUrl = (car: CarProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage/')

    const {make, year, modal} = car
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make)
    url.searchParams.append('modalFamily', modal?.split(' ')[0])
    url.searchParams.append('zoomType', 'fullscreen')
    url.searchParams.append('modalYear', `${year}`)
    url.searchParams.append('angle', `${angle}`)

    return `${url}`
}