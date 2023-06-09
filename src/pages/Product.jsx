import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"

const Container = styled.div`
`

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: "10px", flexDirection: "column" })};
`
const ImgContainer = styled.div`
	flex: 1;
	
`

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({ height: "40vh" })};
`

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: "10px" })};
`

const Title = styled.h1`
	font-weight: 200;
`
const Description = styled.p`
	margin: 20px 0px;
`
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`
const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	${mobile({ width: "100%" })};
`

const Filter = styled.div`
	display: flex;
	align-items: center;
`
const FilterTitle = styled.span`
	font-size: 16px;
	font-weight: 200;
	margin-right: 5px;
`

const FilterLength = styled.select`
	font-size: 16px;
`
const FilterOscillator = styled.select`
	font-size: 16px;
`
const FilterSize = styled.select`
	font-size: 16px;
`



const FilterLengthOption = styled.option`
	
`
const FilterOscillatorOption = styled.option`
`
const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 50%;
	${mobile({ width: "100%" })};
`

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`

const Button = styled.button`
	padding: 15px;
	margin-left: 20px;
	border-radius: 10px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: skyblue;
	}
`



const Product = () => {
  return (
	<Container>
		<Navbar />
		<Announcement />
		<Wrapper>
			<ImgContainer>
				<Image src='https://cdn.shopify.com/s/files/1/1257/6551/products/1hpthrusterpic.png?v=1613661914&width=600' />
			</ImgContainer>
			<InfoContainer>
				<Title>Thruster</Title>
				<Description>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
					quibusdam, voluptatum, quae, voluptates quia voluptatibus quod
					asperiores voluptate quidem natus quas. Quisquam, quae. Quisquam
					quibusdam, voluptatum, quae, voluptates quia voluptatibus quod
					asperiores voluptate quidem natus quas. Quisquam, quae.
				</Description>
				<Price>$ 20</Price>
				<FilterContainer>
					<Filter>
						<FilterTitle>Cord Length</FilterTitle>
						<FilterLength>
							<FilterLengthOption disabled selected>
								Cord Length
							</FilterLengthOption>
							<FilterLengthOption>50' Cord</FilterLengthOption>
							<FilterLengthOption>100' Cord</FilterLengthOption>
							<FilterLengthOption>150' Cord</FilterLengthOption>
						</FilterLength>
					</Filter>
					<Filter>
					<FilterTitle>Oscillator</FilterTitle>
						<FilterOscillator>
							<FilterOscillatorOption disabled selected>
								Select
							</FilterOscillatorOption>
							<FilterOscillatorOption>Yes</FilterOscillatorOption>
							<FilterOscillatorOption>No</FilterOscillatorOption>
						</FilterOscillator>
					</Filter>
					<Filter>
						<FilterTitle>Size</FilterTitle>
						<FilterSize>
							<FilterSizeOption>1/2 HP</FilterSizeOption>
							<FilterSizeOption>3/4 HP</FilterSizeOption>
							<FilterSizeOption>1 HP</FilterSizeOption>
						</FilterSize>
					</Filter>
				</FilterContainer>
				<AddContainer>
					<AmountContainer>
						<Remove />
						<Amount>1</Amount>
						<Add />
					</AmountContainer>
					<Button>ADD TO CART</Button>
				</AddContainer>
			</InfoContainer>
		</Wrapper>
		<Newsletter />
		<Footer />
	</Container>
  )
}

export default Product
