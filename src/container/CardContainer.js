import Cards from "../components/Cards";
import { connect } from 'react-redux'
import { createStreak } from "../actions/index"

const mapStateToProps = state => ({
  addStreakHandler: data => dispatch(createStreak(data))
})

const mapDispatchToProps = dispatch => ({
  addStreakHandler: data => dispatch(createStreak(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Cards)