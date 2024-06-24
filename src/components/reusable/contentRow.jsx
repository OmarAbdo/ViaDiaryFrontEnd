import PropTypes from 'prop-types';
import TrackList from "./trackList";
export default function ContentRow({ headerValue }) {
    return (
      <div>
        <p>Discover new</p>
        <h1> {headerValue}</h1>
        <TrackList />
      </div>
    );
}

ContentRow.propTypes = {
  headerValue: PropTypes.string.isRequired,
};
