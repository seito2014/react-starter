export default function button() {

    'use strict';

    class Button extends React.Component {
        constructor(pops){
            super(pops);
        }

        render() {
            const {text} = this.props;

            return (
                <button className="button">{text}</button>
            );
        }
    }

    const $sample = document.getElementById('js-sample');

    ReactDOM.render(<Button text="button" />, $sample);
}