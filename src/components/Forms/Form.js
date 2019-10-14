import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper'

class Form extends Component{
  render(){
    return(
      <Wrapper>
        <button
          class="form__perawat accordion-header heading-2 sh-sf rad-top-5 rad-bot-5 pad-bot-8"
        >
          Assessment Awal -
          <span class="heading-2 heading-2--blue">Perawat</span>
          <i class="icon fa fa-chevron-down"></i>
        </button>
        <div class="accordion-container form__cppt__content sh-sf rad-bot-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nosti,
            credo, illud: Nemo pius est, qui pietatem-; Verum hoc idem saepe
            faciamus. Non minor, inquit, voluptas percipitur ex vilissimis rebus
            quam ex pretiosissimis.
          </p>
        </div>
      </Wrapper>
    );
  }
}

export default Form;