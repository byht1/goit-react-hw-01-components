import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Statistics.styled';
import { getRandomHexColor } from './../function/colot';

export const StatsListElements = ({ stats }) => {
  return stats.map(x => {
    return (
      <Item key={x.id} style={{ backgroundColor: getRandomHexColor() }}>
        <Label>{x.label}</Label>
        <Percentage>{x.percentage}%</Percentage>
      </Item>
    );
  });
};
