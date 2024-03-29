import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import bankServiceMessages from '../../translations/bankServiceMessages';

class BankService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={bankServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="bank.title"
							defaultMessage="Opening bank accounts"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="bank.1"
							defaultMessage="Opening an account with a local bank is an important part of living
					and doing business in the UK."
						/>
						<br />
						<br />
						<FormattedMessage
							id="bank.2"
							defaultMessage="Sooner or later, you will need an account to pay utility bills,
					receive income from renting an apartment, doing business, for
					savings."
						/>

						<br />
						<br />
						<FormattedMessage
							id="bank.3"
							defaultMessage="The main criteria for choosing a bank in England, as in the whole
						world: reliability and prestige; convenience in managing the
						account; confidentiality of information; Correspondence of the
						profile of the bank to the specifics of the proposed operations on
						the account; cost of service; the minimum deposit amount; interest
						on accounts; territorial location."
						/>

						<br />
						<br />
						<FormattedMessage
							id="bank.4"
							defaultMessage="At the same time, there is also a characteristic feature of the
						English banking system - the presentation of various requirements to
						customers who wish to open an account with them. There are also
						different types of services and accounts offered by banks."
						/>

						<br />
						<br />
						<FormattedMessage
							id="bank.5"
							defaultMessage="Usually, the procedure for opening an account with a bank in the UK
						takes from one to seven days. If it is successful, you will receive
						a bank account number. Checkbook and debit cards are sent by mail to
						the address you specify. Account opening is offered in the following
						currencies: Euro, Pound Sterling and US Dollar."
						/>

						<br />
						<br />
						<FormattedMessage
							id="bank.6"
							defaultMessage="Our advice is that the procedure for opening an account in the bank
						was as simple and convenient as possible, it is best to entrust this
						matter to specialists."
						/>
						<br />
						<br />
						<FormattedMessage
							id="bank.7"
							defaultMessage="Capital Estate London cooperates with such banks as Coutts Bank,
					Citi, HSBC, Barclays, Lloyds TSB, Santander, NatWest and other major
					financial and credit institutions of Great Britain."
						/>

						<br />
						<br />
						<FormattedMessage
							id="bank.8"
							defaultMessage="If you need assistance in opening a bank account in the offshore
						zone, we can also help in this."
						/>

						<br />
						<br />
					</p>
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(BankService);
