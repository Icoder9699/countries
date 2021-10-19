import styled from "styled-components"

export const Card = ({img, name, info=[], onClick}) => {
	return (
		<Wrapper onClick={onClick}>
			<CardImg src={img} alt={name}/>
			<CardBody>
				<CardTitle>
					{name}
				</CardTitle>
				<CardList>
					{info.map(item => (
						<CardListItem key={Math.random()}>
							<b>{item.title}:</b> {item.desc}
						</CardListItem>
					))}
				</CardList>
			</CardBody>
		</Wrapper>
	)
}

const Wrapper = styled.article`
	border-radius: var(--radii);
	background-color: car(--colors-ui-base);
	box-shadow: var(--shadow);
	cursor: pointer;
	overflow: hidden;
`;

const CardImg = styled.img`
	display: block;
	width: 100%;
	height: 150px;
	object-fit: cover;
	object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
	padding: 1.5rem 1.5rem 2rem;
	color: var(--colors-text);
`;

const CardTitle = styled.h3`
	font-size: var(--fs-md);
  font-weight: var(--fw-bold);
	color: var(--colors-text);
	margin-bottom: 5px;
	line-height: 1rem;
`;

const CardList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 5px 0 0 0;
`;

const CardListItem = styled.li`
	font-size: var(--fs-sm);
	line-height: 1.5;
	font-weight: var(--fw-light);

	& > b{
		font-weight: var(--fw-bold);
	}
`;
