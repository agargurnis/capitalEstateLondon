import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import educationServiceMessages from '../../translations/educationServiceMessages';

class EducationService extends Component {
	render() {
		return (
			<IntlProvider
				locale={this.props.lang}
				messages={educationServiceMessages[this.props.lang]}
			>
				<div>
					<h2 className="text-center">
						<FormattedMessage
							id="education.title1"
							defaultMessage="Education"
						/>
					</h2>

					<p className="pt-4">
						<FormattedMessage
							id="education.1"
							defaultMessage="Education in the UK is the key to a successful career and prosperity.
					After all, the diplomas and certificates that are issued in England
					are highly quoted around the world."
						/>
						<br />
						<br />
						<FormattedMessage
							id="education.2"
							defaultMessage="In the ranking of higher education from the top 100 universities in
						the world, English universities occupy half of the positions. Having
						graduated in the UK, you can count on a promising job in any country."
						/>

						<br />
						<br />
						<FormattedMessage
							id="education.3"
							defaultMessage="At the same time, the UK is one of the most accessible European
						countries in terms of obtaining higher education. The cost of training
						in public universities - about 3 thousand pounds per year."
						/>

						<br />
						<br />
						<FormattedMessage
							id="education.4"
							defaultMessage="The English education system is unique. It is based on study through
						education, through familiarization with the subject, to the way of
						life. All educational institutions give their students the opportunity
						to immerse themselves in the traditional way of life of British
						society. And they combine this with the most modern methods of
						education."
						/>

						<br />
						<br />
						<FormattedMessage
							id="education.5"
							defaultMessage="Linguistic and summer schools, courses deserve special attention. The
						variety of programs presented by these educational institutions makes
						it possible for students of any age to raise the level of classical or
						business English, to raise the level of general education."
						/>

						<br />
						<br />
					</p>
					<h4 className="text-center">
						<FormattedMessage
							id="education.title2"
							defaultMessage="Education system"
						/>
					</h4>
					<p className="pt-4">
						<FormattedMessage
							id="education.6"
							defaultMessage="The traditional education system in England is divided into four
					important parts:"
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="education.7"
							defaultMessage="- Primary education, which the child receives from 5 to
						11 years."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="education.8"
							defaultMessage="- Secondary education - secondary school education
						continues from 11 to 16 years. The last two years of training from 14
						to 16 years go to prepare for the GCSE exam, which corresponds to the
						receipt of the certificate of secondary education. Training can take
						place either in a public (free) school or in a private school, most of
						which also provide a boarding school."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="education.9"
							defaultMessage="- Further education is the training under the Advanced
						Level program, which lasts 2 years and is designed for in-depth study
						of the basic subjects required for admission to the university."
						/>
						<br />
						<br />
						&ensp; &ensp;{' '}
						<FormattedMessage
							id="education.10"
							defaultMessage="- Higher education, for which foreign students are
						required to present an IELTS / TOEFL certificate."
						/>
						<br />
						<br />
						<FormattedMessage
							id="education.11"
							defaultMessage="The benefits of obtaining an education in the UK are undeniable.
						Nevertheless, the process itself implies timely financial preparation
						and the solution of many other issues."
						/>
						<br />
						<br />
						<FormattedMessage
							id="education.12"
							defaultMessage="How to choose a school for your child and a university for a graduate?
						When and how to submit documents? Where to rent a house for study?"
						/>
						<br />
						<br />
						<FormattedMessage
							id="education.13"
							defaultMessage="Applying to Capital Estate London , you will receive exhaustive
						answers to all these questions! Help in preparing the necessary
						documents and consultations on preparation for the entrance
						examinations are also provided!"
						/>
					</p>
				</div>
			</IntlProvider>
		);
	}
}

const mapStateToProps = state => ({
	lang: state.locale.lang
});

export default connect(mapStateToProps)(EducationService);
