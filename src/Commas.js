//Adds commas to numbers

export default function Commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}
