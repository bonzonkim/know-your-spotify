import styled from '@emotion/styled';

const HeaderStyle = styled.header`
	display: grid;
	place-items: center;
	/*background-color: rgb(99,215,106); 진초록 */
	//background-color: rgb(242,253,245);
	//background-color: rgb(152, 255, 152);
	background-color: rgb(101, 212, 110);

	> p {
		cursor: pointer;
	}
`;

const Header = () => {
	return (
		<HeaderStyle>
			<h2 onClick={() => (window.location.href = '/')}>Know your Spotify</h2>
		</HeaderStyle>
	);
};

export default Header;
