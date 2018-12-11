import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';

export default function transformForecast(data){
    return data.list.filter(item => {
        return moment.unix(item.dt).utc().hour() === 6 ||
        moment.unix(item.dt).utc().hour() === 12 ||
        moment.unix(item.dt).utc().hour() === 18
    }).map(item => {
        return {
            weekDay: moment.unix(item.dt).format('dddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)
        }
    });
}