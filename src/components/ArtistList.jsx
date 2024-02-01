import { ContainerDiv, Table, TableRow, TableCell, IndexNumberStyle } from './styles/List';

const ArtistList = ({ topArtistList, userData }) => {
	return (
		<ContainerDiv>
			<h3>{userData}'s Top Artist for last 6 months</h3>
			<Table>
				<thead>
					<TableRow>
						<TableCell></TableCell>
						<TableCell>Image</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Genres</TableCell>
					</TableRow>
				</thead>
				<tbody>
					{topArtistList.map((item, index) => (
						<TableRow key={item.id}>
							<IndexNumberStyle>{index + 1}</IndexNumberStyle>
							<TableCell>
								<img src={item.images[1].url} alt={'artist'} />
							</TableCell>
							<TableCell>
								<h4>{item.name}</h4>
							</TableCell>
							<TableCell>
								{item.genres.map((genre, i, arr) => (
									<p key={i}>
										{genre} {i < arr.length - 1 && ', '}
									</p>
								))}
							</TableCell>
						</TableRow>
					))}
				</tbody>
			</Table>
		</ContainerDiv>
	);
};

export default ArtistList;
