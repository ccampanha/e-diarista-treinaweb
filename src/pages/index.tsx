import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UseInformation/UserInformation';

const Home: NextPage = () => {
	return (
		<div>
			<SafeEnvironment />
			<PageTitle
				title={'Conheça os profissionais'}
				subtitle={
					'Preencha seu endereço e veja todos os profissionais da sua localidade'
				}
			/>
			<UserInformation
				name={'Cristiana Campanha'}
				picture={'https://github.com/ccampanha.png'}
				rating={5}
				description={'Rio de Janeiro'}
			/>
		</div>
	);
};

export default Home;
