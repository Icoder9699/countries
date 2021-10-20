import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useHistory, useParams } from "react-router";
import { Button } from "../components/Button";
import { Info } from "../components/Info";
import { searchByCountry } from "../config";

export const Details = () => {
	const [details, setDetails] = useState([]);
	const {name} = useParams();
	const {goBack, push} = useHistory();

	useEffect(() => {
		axios.get(searchByCountry(name)).then(resp => setDetails(resp.data[0]));
		//eslint-disable-next-line
	},[name])

	
	return (
		<div>
			<Button onClick={goBack}>
				<IoArrowBack/>&nbsp;Back
			</Button>
			<Info push={push} {...details}/>
		</div>
	)
}
