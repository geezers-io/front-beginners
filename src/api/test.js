import { getMovie } from './client';

async function test() {
    const movie = await getMovie(11);
    console.log({ movie });
}


export default test;
