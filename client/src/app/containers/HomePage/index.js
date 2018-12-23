import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HomePageComponent from 'components/HomePage';
import { connect } from 'react-redux';
// import { actionName } from 'actions/action';

class HomePage extends PureComponent {
  static propTypes = {
    // getListFeedback: PropTypes.func.isRequired,
    // filterFeedback: PropTypes.func.isRequired,
  };

  // state = { checked: '0' };

  componentDidMount() {
    // this.props.getListFeedback();
  }

  handleOptionChange = e => {
    // this.setState({ checked: e.target.value });
    // this.props.filterFeedback(e.target.value);
  };

  render() {
    return (
      <HomePageComponent
        {...this.props}
        // handleOptionChange={this.handleOptionChange}
        // checked={this.state.checked}
      />
    );
  }
}

const mapStateToProps = state => ({
  // feedbacks: state.feedback.feedbacks,
  // averageRating: state.feedback.averageRating,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
