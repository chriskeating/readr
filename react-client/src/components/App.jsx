import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      number: '',
      term: ''
    }
    this.search = this.search.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  search () {
    var postObj = {'styleId': this.state.number};
    $.ajax({
      type: 'POST',
      url: '/items/import',
      data: postObj,
      success: (data => {
        console.log('success! here is the data', data);
      }),
      error: (err) => {
        console.log('error is ', err)
      }
    })
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/items', 
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err)
      }
    });
    this.render()
  }

  handleChange(e) {
    this.setState({
      number: e.target.value
    })
  }

  

  render () {
    return (
    <div>
      <div className="landing-page">
        <img className= "header-image" src={"https://openclipart.org/download/219885/Beer-Mug-2015060235.svg"}/>
        <h1 className="container-fluid full-page-1">The Growler™</h1>
        <form action="" className="submit-form">
          <input type="text" name="beerType" placeholder="Enter Beer Type ID" value={this.state.number} onChange={this.handleChange.bind(this)} id='typeid'></input>
          <button className="search-button" onClick={() => { this.search(); this.componentDidMount();}}>Search</button>
        </form>
      </div>
      <div>
        <List items={this.state.items}/>x
      </div>
      <div className="row">
        <div className="col-sm-5 left-list">
          <div><b>Beer Type By ID</b></div>
          <div>1 - "Classic English-Style Pale Ale"</div>
          <div>2 - "English-Style India Pale Ale"</div>
          <div>3 - "Ordinary Bitter"</div>
          <div>4 - "Special Bitter or Best Bitter"</div>
          <div>5 - "Extra Special Bitter"</div>
          <div>6 - "English-Style Summer Ale"</div>
          <div>7 - "Scottish-Style Light Ale"</div>
          <div>8 - "Scottish-Style Heavy Ale"</div>
          <div>9 - "Scottish-Style Export Ale"</div>
          <div>10 - "English-Style Pale Mild Ale"</div>
          <div>11 - "English-Style Dark Mild Ale"</div>
          <div>12 - "English-Style Brown Ale" </div>
          <div>13 - "Old Ale"</div>
          <div>14 - "Strong Ale"</div>
          <div>15 - "Scotch Ale"</div>
          <div>16 - "British-Style Imperial Stout"</div>
          <div>17 - "British-Style Barley Wine Ale" </div>
          <div>18 - "Brown Porter"</div>
          <div>19 - "Robust Porter"</div>
          <div>20 - "Sweet or Cream Stout"</div>
          <div>21 - "Oatmeal Stout"</div>
          <div>22 - "Irish-Style Red Ale"</div>
          <div>23 - "Classic Irish-Style Dry Stout"</div>
          <div>24 - "Foreign (Export)-Style Stout"</div>
          <div>25 - "American-Style Pale Ale"</div>
          <div>26 - "Fresh \"Wet\" Hop Ale"</div>
          <div>27 - "Pale American-Belgo-Style Ale"</div>
          <div>28 - "Dark American-Belgo-Style Ale"</div>
          <div>29 - "American-Style Strong Pale Ale"</div>
          <div>30 - "American-Style India Pale Ale"</div>
          <div>31 - "Imperial or Double India Pale Ale"</div>
          <div>32 - "American-Style Amber\/Red Ale"</div>
          <div>33 - "Imperial Red Ale"</div>
          <div>34 - "American-Style Barley Wine Ale"</div>
          <div>35 - "American-Style Wheat Wine Ale"</div>
          <div>36 - "Golden or Blonde Ale"</div>
          <div>37 - "American-Style Brown Ale"</div>
          <div>38 - "Smoke Porter"</div>
          <div>39 - "Brett Beer"</div>
          <div>40 - "American-Style Sour Ale"</div>
          <div>41 - "American-Style Black Ale"</div>
          <div>42 - "American-Style Stout"</div>
          <div>43 - "American-Style Imperial Stout"</div>
          <div>44 - "Specialty Stouts"</div>
          <div>45 - "German-Style K\u00f6lsch \/ K\u00f6ln-Style K\u00f6lsch"</div>
          <div>46 - "Berliner-Style Weisse (Wheat)"</div>
          <div>47 - "Leipzig-Style Gose"</div>
          <div>48 - "South German-Style Hefeweizen \/ Hefeweissbier"</div>
          <div>49 - "South German-Style Kristall Weizen \/ Kristall Weissbier"</div>
          <div>50 - "German-Style Leichtes Weizen \/ Weissbier"</div>
          <div>51 - "South German-Style Bernsteinfarbenes Weizen \/ Weissbier"</div>
          <div>52 - "South German-Style Dunkel Weizen \/ Dunkel Weissbier"</div>
          <div>53 - "South German-Style Weizenbock \/ Weissbock"</div>
          <div>54 - "Bamberg-Style Weiss (Smoke) Rauchbier (Dunkel or Helles)"</div>
          <div>55 - "German-Style Altbier"</div>
          <div>56 - "Kellerbier (Cellar beer) or Zwickelbier - Ale"</div>
          <div>57 - "Belgian-Style Flanders Oud Bruin or Oud Red Ales"</div>
          <div>58 - "Belgian-Style Dubbel"</div>
          <div>59 - "Belgian-Style Tripel"</div>
          <div>60 - "Belgian-Style Quadrupel"</div>
          <div>61 - "Belgian-Style Blonde Ale"</div>
          <div>62 - "Belgian-Style Pale Ale"</div>
          <div>63 - "Belgian-Style Pale Strong Ale"</div>
          <div>64 - "Belgian-Style Dark Strong Ale"</div>
          <div>65 - "Belgian-Style White (or Wit) \/ Belgian-Style Wheat"</div>
          <div>66 - "Belgian-Style Lambic"</div>
          <div>67 - "Belgian-Style Gueuze Lambic"</div>
          <div>68 - "Belgian-Style Fruit Lambic"</div>
          <div>69 - "Belgian-Style Table Beer"</div>
          <div>70 - "Other Belgian-Style Ales"</div>
          <div>71 - "French-Style Bi\u00e8re de Garde"</div>
          <div>72 - "French & Belgian-Style Saison"</div>
          <div>73 - "International-Style Pale Ale"</div>
          <div>74 - "Australian-Style Pale Ale"</div>
          <div>75 - "German-Style Pilsener"</div>
          <div>76 - "Bohemian-Style Pilsener"</div>
          <div>77 - "German-Style Leichtbier"</div>
          <div>78 - "M\u00fcnchner (Munich)-Style Helles"</div>
          <div>79 - "Dortmunder \/ European-Style Export"</div>
          <div>80 - "Vienna-Style Lager"</div>
          <div>81 - "German-Style M\u00e4rzen"</div>
          <div>82 - "German-Style Oktoberfest \/ Wiesen (Meadow)"</div>
          <div>83 - "European-Style Dark \/ M\u00fcnchner Dunkel"</div>
          <div>84 - "German-Style Schwarzbier"</div>
          <div>85 - "Bamberg-Style M\u00e4rzen Rauchbier"</div>
        </div>
        <div className="col-sm-5 right-list">
          <div>86 - "Bamberg-Style Helles Rauchbier"</div>
          <div>87 - "Bamberg-Style Bock Rauchbier"</div>
          <div>88 - "Traditional German-Style Bock"</div>
          <div>89 - "German-Style Heller Bock\/Maibock"</div>
          <div>90 - "German-Style Doppelbock"</div>
          <div>91 - "German-Style Eisbock"</div>
          <div>92 - "Kellerbier (Cellar beer) or Zwickelbier - Lager"</div>
          <div>93 - "American-Style Lager"</div>
          <div>94 - "American-Style Light (Low Calorie) Lager"</div>
          <div>95 - "American-Style Low-Carbohydrate Light Lager"</div>
          <div>96 - "American-Style Amber (Low Calorie) Lager"</div>
          <div>97 - "American-Style Premium Lager"</div>
          <div>98 - "American-Style Pilsener"</div>
          <div>99 - "American-Style Ice Lager"</div>
          <div>100 - "American-Style Malt Liquor"</div>
          <div>101 - "American-Style Amber Lager"</div>
          <div>102 - "American-Style M\u00e4rzen \/ Oktoberfest"</div>
          <div>103 - "American-Style Dark Lager"</div>
          <div>104 - "Baltic-Style Porter"</div>
          <div>105 - "Australasian, Latin American or Tropical-Style Light Lager"</div>
          <div>107 - "Dry Lager"</div>
          <div>108 - "Session Beer"</div>
          <div>109 - "American-Style Cream Ale or Lager"</div>
          <div>110 - "California Common Beer"</div>
          <div>111 - "Ginjo Beer or Sake-Yeast Beer"</div>
          <div>112 - "Light American Wheat Ale or Lager with Yeast"</div>
          <div>113 - "Light American Wheat Ale or Lager without Yeast"</div>
          <div>114 - "Fruit Wheat Ale or Lager with or without Yeast"</div>
          <div>115 - "Dark American Wheat Ale or Lager with Yeast"</div>
          <div>116 - "Dark American Wheat Ale or Lager without Yeast"</div>
          <div>117 - "Rye Ale or Lager with or without Yeast"</div>
          <div>118 - "German-Style Rye Ale (Roggenbier) with or without Yeast"</div>
          <div>119 - "Fruit Beer"</div>
          <div>120 - "Field Beer"</div>
          <div>121 - "Pumpkin Beer"</div>
          <div>122 - "Chocolate \/ Cocoa-Flavored Beer"</div>
          <div>123 - "Coffee-Flavored Beer"</div>
          <div>124 - "Herb and Spice Beer"</div>
          <div>125 - "Specialty Beer"</div>
          <div>126 - "Specialty Honey Lager or Ale"</div>
          <div>127 - "Gluten-Free Beer"</div>
          <div>128 - "Indigenous Beer (Lager or Ale)"</div>
          <div>129 - "Smoke Beer (Lager or Ale)"</div>
          <div>130 - "Experimental Beer (Lager or Ale)"</div>
          <div>131 - "Historical Beer"</div>
          <div>132 - "Wood- and Barrel-Aged Beer"</div>
          <div>133 - "Wood- and Barrel-Aged Pale to Amber Beer"</div>
          <div>134 - "Wood- and Barrel-Aged Dark Beer"</div>
          <div>135 - "Wood- and Barrel-Aged Strong Beer"</div>
          <div>136 - "Wood- and Barrel-Aged Sour Beer"</div>
          <div>137 - "Aged Beer (Ale or Lager)"</div>
          <div>138 - "Other Strong Ale or Lager"</div>
          <div>139 - "Non-Alcoholic (Beer) Malt Beverages"</div>
          <div>140 - "Dry Mead"</div>
          <div>141 - "Semi-Sweet Mead"</div>
          <div>142 - "Sweet Mead"</div>
          <div>143 - "Cyser (Apple Melomel)"</div>
          <div>144 - "Pyment (Grape Melomel)"</div>
          <div>145 - "Other Fruit Melomel"</div>
          <div>146 - "Metheglin"</div>
          <div>147 - "Braggot"</div>
          <div>148 - "Open Category Mead"</div>
          <div>149 - "Common Cider"</div>
          <div>150 - "English Cider"</div>
          <div>151 - "French Cider"</div>
          <div>152 - "Common Perry"</div>
          <div>153 - "Traditional Perry"</div>
          <div>154 - "New England Cider"</div>
          <div>155 - "Fruit Cider"</div>
          <div>156 - "Apple Wine"</div>
          <div>157 - "Other Specialty Cider or Perry"</div>
          <div>158 - "American-Style Imperial Porter"</div>
          <div>159 - "Adambier"</div>
          <div>160 - "Grodziskie"</div>
          <div>161 - "Flavored Malt Beverage"</div>
          <div>162 - "Energy Enhanced Malt Beverage"</div>
          <div>163 - "Double Red Ale"</div>
          <div>164 - "Session India Pale Ale"</div>
          <div>165 - "Contemporary Gose"</div>
          <div>166 - "Dutch-Style Kuit, Kuyt or Koyt"</div>
          <div>167 - "Belgian-style Fruit Beer"</div>
          <div>168 - Chili Pepper Beer"</div>
          <div>169 - "Mixed Culture Brett Beer"</div>
          <div>170 - "Wild Beer"</div>
        </div>
      </div>
    </div>
    )
  }
}
        

export default App;

        // console.log(this.state.items)
        // this.state.items.push(JSON.parse(data))
        // 