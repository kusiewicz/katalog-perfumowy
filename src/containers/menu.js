import React, { useEffect, useState } from 'react';
import { Menu } from '../components';

export function MenuContainer() {
  const [sex, setSex] = useState('');
  const [priceCategory, setPriceCategory] = useState('');
  const [buttonStatus, setButtonStatus] = useState(false);
  const [tooltipScale, setTooltipScale] = useState(0);

  // When the button is disabled, pressing it shows a tooltip.
  const buttonHandler = (event) => {
    if (!buttonStatus) {
      event.preventDefault();
      setTooltipScale(1);
      setTimeout(() => {
        setTooltipScale(0);
      }, 2500);
    }
  };

  // The button will only be active when the category and sex values are selected.
  useEffect(() => {
    if (priceCategory && sex) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  }, [priceCategory, sex]);

  return (
    <Menu>
      <Menu.Frame>
        <Menu.Text>Wybierz płeć</Menu.Text>
        <Menu.Selection>
          <Menu.Input
            type="radio"
            value="female"
            id="female"
            name="sex-radio"
            onChange={({ target }) => setSex(target.value)}
          />
          <Menu.Label htmlFor="female">Kobieta</Menu.Label>
        </Menu.Selection>
        <Menu.Selection>
          <Menu.Input
            type="radio"
            value="male"
            id="male"
            name="sex-radio"
            onChange={({ target }) => setSex(target.value)}
          />
          <Menu.Label htmlFor="male">Mężczyzna</Menu.Label>
        </Menu.Selection>
      </Menu.Frame>

      <Menu.Frame>
        <Menu.Text>Wybierz kategorię cenową</Menu.Text>
        <Menu.Selection>
          <Menu.Input
            type="radio"
            id="c0-100__radio"
            name="category-radio"
            value="0-100"
            onChange={({ target }) => setPriceCategory(target.value)}
          />
          <Menu.Label htmlFor="c0-100__radio">0-100 PLN</Menu.Label>
        </Menu.Selection>
        <Menu.Selection>
          <Menu.Input
            type="radio"
            id="c100-200__radio"
            name="category-radio"
            value="100-200"
            onChange={({ target }) => setPriceCategory(target.value)}
          />
          <Menu.Label htmlFor="c100-200__radio">100-200 PLN</Menu.Label>
        </Menu.Selection>
        <Menu.Selection>
          <Menu.Input
            type="radio"
            id="c200-300__radio"
            name="category-radio"
            value="200-300"
            onChange={({ target }) => setPriceCategory(target.value)}
          />
          <Menu.Label htmlFor="c200-300__radio">200-300 PLN</Menu.Label>
        </Menu.Selection>
        <Menu.Selection>
          <Menu.Input
            type="radio"
            id="c300__radio"
            name="category-radio"
            value="300+"
            onChange={({ target }) => setPriceCategory(target.value)}
          />
          <Menu.Label htmlFor="c300__radio">300+ PLN</Menu.Label>
        </Menu.Selection>
      </Menu.Frame>
      <Menu.ButtonLink
        to={`catalog/${sex}/${priceCategory}`}
        onClick={buttonHandler}
        data-tooltip="Wybierz płeć i kategorię cenową."
        scale={tooltipScale}
      >
        OK
      </Menu.ButtonLink>
    </Menu>
  );
}
