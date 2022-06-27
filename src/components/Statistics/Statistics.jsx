import PropTypes from 'prop-types';
import { StatisticsSection, TitleName, StatsList } from './Statistics.styled';
import { StatsListElements } from './StatsListElements';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <TitleName>{title}</TitleName>}
      <StatsList>
        <StatsListElements stats={stats} />
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
