import { userLogin } from '../Queries/Queries'

export const datos = (props) => {
    try {
        const user = userLogin(props.email, props.password)
        console.log(user);
    } catch (error) {
        console.log('No funciono');
    }
}
