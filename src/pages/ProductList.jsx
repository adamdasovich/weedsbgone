import Announcement from '../components/Announcement'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Title = styled.h1`
	margin: 20px;
`
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;

`
const Filter = styled.div`
	margin: 20px;
	${mobile({ margin: '0px', display: 'flex', flexDirection: 'column' })};
`
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: '0px' })};
`

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ marginRight: '0px' })};
`
const Option = styled.option`
`

const ProductList = () => {
  return (
	<Container>
		<Navbar />
		<Announcement />
		<Title>Thrusters</Title>
		<FilterContainer>
			<Filter>
				<FilterText>Filter Products:</FilterText>
				<Select>
					<Option disabled selected>
						Cord Length
					</Option>
					<Option>50' Cord</Option>
					<Option>100' Cord</Option>
					<Option>150' Cord</Option>
				</Select>
				<Select>
					<Option disabled selected>
						Oscillator
					</Option>
					<Option>Yes</Option>
					<Option>No</Option>
				</Select>
				<Select>
					<Option disabled selected>
						Size
					</Option>
					<Option>1/2 HP</Option>
					<Option>3/4 HP</Option>
					<Option>1 HP</Option>
				</Select>
			</Filter>
			<Filter>
				<FilterText>Sort Products:</FilterText>
				<Select>
					<Option disabled selected>
						Newest
					</Option>
					<Option>Price (asc)</Option>
					<Option>Price (desc)</Option>
				</Select>
			</Filter>
		</FilterContainer>
		<Products />
		<Newsletter />
		<Footer />
	</Container>
  )
}

export default ProductList
