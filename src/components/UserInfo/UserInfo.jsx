import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledUserInfo = styled.div`
  order: 0;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${window.innerWidth > 1024 ? '#0c3351' : '#fff'};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  color: ${window.innerWidth > 1024 ? '#fff' : '#000'};
  font-size: 18px;
  text-transform: uppercase;
  line-height: 30px;
  text-align: center;
  box-shadow: 0 0 0 #fff;

  @media screen and (min-width: 1024px) {
    margin-left: 26px;
    margin-right: 0px;
    order: 2;
  }
`;

const UserInfo = props => {
  const { user } = props;
  return <StyledUserInfo>{user.userName[0]}</StyledUserInfo>;
};

UserInfo.propTypes = {
  user: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserInfo);
