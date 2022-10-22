import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";
import Carousel from '../components/Carousel/Carousel'
import axios from "axios";
import Products from "../components/Products/Products";

export default function Home() {

  const getUser= async ()=> {
    try {
      const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();

  return (
    <Container>
      <Navbar />
      <Carousel/>
      <Products/>
    </Container>
  );
} 