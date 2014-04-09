var markersArray = [];	
var beaches = [
['103rd St/Watts Towers Station', 22.15, -45.7, 'Blue', 'Yes', 'No', '63', '0', '0', '117, 254, 305, 612, 55/355', 'riding_metro/bus_overview/images/801.pdf', '10100+Grandee+Av%2C+Los+Angeles+90002', 'place?ftid=0x80c2cbd708a7b5d9:0xc7731f7de0ea059d&q=type:transit_station:%22104th+Street+Station%22&t=h&cad=src:ppiwlink&ei=1q5jT62bMuagiQKP9oGQDQ&dtab=2', 'All', '0'],
['1st St Station', 22.15, -83.035, 'Blue', 'No', 'No', '0', '0', '0', '60, 232', 'riding_metro/bus_overview/images/801.pdf', '108+N+Long+Beach+Bl%2C+Long+Beach+90802', 'place?ftid=0x80dd31395957ce0b:0xb4f2dabe8c0d9d27&q=type:transit_station:%221st+Street+Station%22&t=h&cad=src:ppiwlink&ei=fa9jT7SqH5DEpgTl4v3gBQ&dtab=2', 'S on 1st St ONLY', '0'],
['23rd St Station', -6.2, 23.2, 'Expo', 'No', 'No', '0', '0', '10', '37, 38, 55/355, 81, 442, 450, 460, 603', 'riding_metro/bus_overview/images/806.pdf', '2460+S+Flower+St%2C+Los+Angeles+90007Ã�â��Ã�Â ', 'place?q=23rd+st+station&hl=en&ftid=0x80c2c7dd2f61edb3:0xa8b5be0990b040a5', 'North ONLY', '0'],
['37th St/USC', -16.3, -0.8, 'Silver', 'No', 'No', '0', '0', '0', '81, 102, 200, 442, 460, 550', 'riding_metro/bus_overview/images/910.pdf', '421+W+37th+St%2C+Los+Angeles+90007', 'place?ftid=0x80c2c80a7162d377:0x4dcc600b8d6d3495&q=type:transit_station:%22Harbor+Transitway+/+37th%22&t=m&cad=src:ppiwlink&ei=EoRnT_ylJcnRiAKn6dHKCQ&dtab=2', 'N on 37th St ONLY', '0'],
['5th St Station', 22.15, -81.8, 'Blue', 'No', 'No', '0', '0', '0', '60, 232', 'riding_metro/bus_overview/images/801.pdf', '598+N+Long+Beach+Bl%2C+Long+Beach+90802', 'place?ftid=0x80dd314758a48625:0x7363600fa31c2c7c&q=type:transit_station:%225th+Street+Station%22&t=h&cad=src:ppiwlink&ei=qq9jT4HrB4j9iQL3qMzrBQ&dtab=2', 'S on 5th St ONLY', '0'],
['7th St/Metro Center Station', 13.8, 42, 'Red, Purple, Expo, Blue', 'No', 'No', '0', '0', '0', '14, 20, 37, 60, 66, 70, 71, 76, 81, 96, 439, 450, 460, 760, 770, 487/489, 51/52/352, 78/79/378', 'around/maps', '660+S+Figueroa+St%2C+Los+Angeles+90017+', 'place?ftid=0x80c2c7b6aaffe2b9:0x8a94aa5c750d3172&q=type:transit_station:%227th+Street+/+Metro+Center+Station%22&t=m&cad=src:ppiwlink&ei=44NnT-mPCpSNigKAtsn6Bw&dtab=2', 'Flower & Fig ONLY', '0'],
['7th St/Metro Center Station', 13.8, 39.1, 'Red, Purple, Expo, Blue', 'No', 'No', '0', '0', '0', '14, 20, 37, 60, 66, 70, 71, 76, 81, 96, 439, 450, 460, 760, 770, 487/489, 51/52/352, 78/79/378', 'around/maps', '660+S+Figueroa+St%2C+Los+Angeles+90017+', 'place?ftid=0x80c2c7b6aaffe2b9:0x8a94aa5c750d3172&q=type:transit_station:%227th+Street+/+Metro+Center+Station%22&t=m&cad=src:ppiwlink&ei=44NnT-mPCpSNigKAtsn6Bw&dtab=2', 'Flower & Fig ONLY', '0'],
['Allen Station', 120.8, 75.7, 'Gold', 'No', 'No', '0', '0', '28', '177, 256, 686', 'riding_metro/bus_overview/images/804.pdf', '395+N+Allen+Av%2C+Pasadena+91106', 'place?ftid=0x80c2c34d6dbb61bb:0x1c6d8cfaaddcea62&q=type:transit_station:%22Allen+Station%22&t=h&cad=src:ppiwlink&ei=WbVjT9OrOMKgiQK8yeWWBA&dtab=2', 'All', '0'],
['Anaheim St Station', 22.15, -80.1, 'Blue', 'No', 'No', '0', '0', '0', '60, 232', 'riding_metro/bus_overview/images/801.pdf', '1290+N+Long+Beach+Bl%2C+Long+Beach+90813', 'place?ftid=0x80dd314496bbf923:0xcc5cf5cd8c80c82a&q=type:transit_station:%22Anaheim+Station%22&t=h&cad=src:ppiwlink&ei=yq9jT_7VGMefiQLM2pzwBQ&dtab=2', 'N on Anaheim ONLY', '0'],
['Artesia Station', 22.15, -66.8, 'Blue', 'Yes', 'Yes', '287', '0', '8', '60, 130, 205, 260, 762', 'riding_metro/bus_overview/images/801.pdf', '1920Ã�â��Ã�Â½+Acacia+Av%2C+Compton+90220', 'place?ftid=0x80c2cb4f30c85dc3:0x61601abcad358187&q=type:transit_station:%22Artesia+Station%22&t=h&cad=src:ppiwlink&ei=2q9jT5rQOqTiiAKFv8TsBQ&dtab=2', 'All', '0'],
['Atlantic Station', 114.5, 36.6, 'Gold', 'Yes', 'No', '262', '8', '12', '68, 260, 762', 'riding_metro/bus_overview/images/804.pdf', '5150+E+Pomona+Bl%2C+Los+Angeles+90022', 'place?ftid=0x80c2cf9ea3cfbce9:0x189ab9eea00d9f34&q=type:transit_station:%22Atlantic+Station%22&t=h&cad=src:ppiwlink&ei=ErVjT9HFJIHhiAKN_PXvBQ&dtab=2', 'All', '0'],
['Avalon Station', 3, -54.7, 'Green', 'Yes', 'No', '158', '0', '12', '48, 53, 51/52/352', 'riding_metro/bus_overview/images/803.pdf', '11667+S+Avalon+Bl%2C+Los+Angeles+90067', 'place?ftid=0x80c2ca3a9038763d:0x18ed36a86c8f44bc&q=type:transit_station:%22Avalon+Station%22&t=h&cad=src:ppiwlink&ei=sb5jT53oCIXYiALkiLzJAw&dtab=2', 'All', '0'],
['Aviation/LAX Station', -85.3, -54.7, 'Green', 'Yes', 'No', '390', '20', '24', '40, 120, 625', 'riding_metro/bus_overview/images/803.pdf', '11500+Aviation+Bl%2C+Los+Angeles+90048', 'place?ftid=0x80c2b6b8e1c32295:0x6aa8f3e022a5137c&q=type:transit_station:%22Aviation+Station+(LAX+Shuttle+Connection)%22&t=h&cad=src:ppiwlink&ei=zL1jT8syl7ChBPT13eIF&dtab=2', 'All', '0'],
['Balboa Station', -109.7, 76.85, 'Orange', 'Yes', 'No', '270', '20', '12', '164, 236/237', 'riding_metro/bus_overview/images/901.pdf', '6340+N+Balboa+Bl%2C+Encino+91316', 'place?ftid=0x80c299c2f68f376d:0xe953027bbaf15e52&q=type:transit_station:%22Balboa+Station%22&t=h&cad=src:ppiwlink&ei=zMpjT-2CN5PKpASg-MX3BQ&dtab=2', 'All', '0'],
['Cal State LA', 108.4, 54.8, 'Silver', 'No', 'No', '0', '0', '0', '256, 665, 487/489', 'riding_metro/bus_overview/images/910.pdf', '5150+State+University+Dr%2C+Los+Angeles+90032', 'place?ftid=0x80c2c599a030271b:0x26be3526166f0608&q=type:transit_station:%22Cal+State+LA+Busway+Station%22&t=m&cad=src:ppiwlink&ei=zYRnT8LrBIKwpgTni4H9Bw&dtab=2', 'All', '0'],
['Canoga Station', -154, 77.6, 'Orange', 'Yes', 'No', '288', '16', '20', '161, 164, 165, 150/240', 'riding_metro/bus_overview/images/901.pdf', '6770+Canoga+Av%2C+Canoga+Park+91303', 'place?ftid=0x80c29c1bd99d60eb:0xed9dcdda4fb0e241&q=type:transit_station:%22Canoga+Station%22&t=h&cad=src:ppiwlink&ei=1spjT5rtB4u2pQSB-6TkBQ&dtab=2', 'All', '0'],
['Canoga Station', -156.9, 76.85, 'Orange', 'Yes', 'No', '288', '16', '20', '161, 164, 165, 150/240', 'riding_metro/bus_overview/images/901.pdf', '6770+Canoga+Av%2C+Canoga+Park+91303', 'place?ftid=0x80c29c1bd99d60eb:0xed9dcdda4fb0e241&q=type:transit_station:%22Canoga+Station%22&t=h&cad=src:ppiwlink&ei=1spjT5rtB4u2pQSB-6TkBQ&dtab=2', 'All', '0'],
['Chatsworth Station', -157.8, 83.8, 'Orange', 'Yes', 'No', '610', '16', '16', '158, 166, 167, 244, 245, 364', 'riding_metro/bus_overview/images/901.pdf', '10046+Old+Depot+Plaza+Road%2CChatsworth+91311', 'place?q=type:transit_station:%22Chatsworth+Station%22&hl=en&ftid=0x80c29cb9a659c3bf:0xf60ceb5b25b25a9d', 'All', '0'],
['Chinatown Station', 50.35, 60.2, 'Gold', 'No', 'No', '0', '0', '6', '45, 76, 83, 84', 'riding_metro/bus_overview/images/804.pdf', '901+N+Spring+St%2C+Los+Angeles+90012', 'place?ftid=0x80c2c65bf1e2d15b:0x54511b5f18c21ea0&q=type:transit_station:%22Chinatown+Station%22&t=h&cad=src:ppiwlink&ei=crVjT8G8DYj9iQL3qMzrBQ&dtab=2', 'Elevator ONLY', '0'],
['Civic Center/Grand Park Station', 33, 52.8, 'Red, Purple', 'No', 'No', '0', '8', '10', '4, 10, 30, 45, 48, 70, 71, 76, 81, 83, 94, 96, 439, 794, 2/302, 40/42, 487/489, 68/84, 78/79/378, 90/91', 'riding_metro/bus_overview/images/802.pdf', '101+S+Hill+St%2C+Los+Angeles+90013', 'place?ftid=0x80c2c64e7fe9817d:0x9979f09858f51d10&q=type:transit_station:%22Civic+Center+Station%22&t=m&cad=src:ppiwlink&ei=cINnT5HoJOq0iQKZ56D7Bw&dtab=2', 'Temple St/Hill St', '0'],
['Compton Station', 22.15, -62.6, 'Blue', 'No', 'No', '0', '0', '4', '60, 125, 127, 128, 202, 51/52/352, 55/355', 'riding_metro/bus_overview/images/801.pdf', '275+Willowbrook+Av%2C+Compton+90220', 'place?ftid=0x80c2cb6def34c567:0x2dabb73232974985&q=type:transit_station:%22Compton+Station%22&t=m&cad=src:ppiwlink&ei=L7BjT4mcLI7-owSXjfH1BQ&dtab=2', 'All', '0'],
['Crenshaw Station', -50.7, -54.7, 'Green', 'Yes', 'No', '513', '4', '12', '126, 207, 210, 710, 757', 'riding_metro/bus_overview/images/803.pdf', '11901+S+Crenshaw+Bl%2C+Hawthorne+90303', 'place?ftid=0x80c2b675975486b3:0x769d92a3f8d1787a&q=type:transit_station:%22Crenshaw+Station%22&t=h&cad=src:ppiwlink&ei=ur1jT5WTH8TmiAK-3tX9BQ&dtab=2', 'All', '0'],
['Culver City Station', -83.5, 9.2, 'Expo', 'Yes', 'No', '586', '8', '20', '33, 220, 534, 733', 'riding_metro/bus_overview/images/806.pdf', '8817+Washington+Bl%2C+Culver+City+90232', 'place?q=type:transit_station:%22Culver+City+Station%22&ftid=0x80c2b981166ee409:0xeeb28f85aa47fea1', 'All', '0'],
['De Soto Station', -147.4, 76.85, 'Orange', 'No', 'No', '0', '8', '12', '164, 244', 'riding_metro/bus_overview/images/901.pdf', '20901+Victory+Bl%2C+Woodland+Hills+91367', 'place?ftid=0x80c29c0254230d3d:0xd45209e9db5e3263&q=type:transit_station:%22de+soto+station%22&hl=en&ved=0CBEQ-gswAA&sa=X&ei=QYZnT8m3NomYowSPmLWKCA', 'All', '0'],
['Del Amo Station', 22.15, -70.4, 'Blue', 'Yes', 'Yes', '367', '12', '10', '202', 'riding_metro/bus_overview/images/801.pdf', '20220+Santa+Fe+Av%2C+Los+Angeles+90220', 'place?ftid=0x80dd349f2f5c24a1:0xe52a246153209234&q=type:transit_station:%22Del+Amo+Station%22&t=m&cad=src:ppiwlink&ei=ULBjT--6F8aViQK2q_WGBg&dtab=2', 'Elevator ONLY', '0'],
['Del Mar Station', 92, 75.7, 'Gold', 'Yes', 'No', '610', '0', '26', '177, 256, 260, 762, 686/687', 'riding_metro/bus_overview/images/804.pdf', '230+S+Raymond+Av%2C+Pasadena+91105', 'place?ftid=0x80c2c37ab9947781:0xa458e893c6821c86&q=type:transit_station:%22Del+Mar+Station%22&t=h&cad=src:ppiwlink&ei=ebVjT_-bG8KgiQK8yeWWBA&dtab=2', 'All', '0'],
['Douglas Station', -89.3, -70, 'Green', 'Yes', 'No', '30', '4', '6', '125', 'riding_metro/bus_overview/images/803.pdf', '700+S+Douglas+St%2C+El+Segundo+90245', 'place?ftid=0x80c2b40363fb10c5:0xbb6291d2aadfc893&q=type:transit_station:%22Douglas+Station%22&t=h&cad=src:ppiwlink&ei=671jT9e4MYfipgSi9YT3Aw&dtab=2', 'All', '0'],
['Downtown Long Beach Station', 11.6, -83, 'Blue', 'No', 'No', '0', '0', '0', '232', 'riding_metro/bus_overview/images/801.pdf', '128+W+1st+St%2C+Long+Beach+90802', 'place?ftid=0x80dd31398cd6ba1d:0x9ca2402856da9628&q=type:transit_station:%22Long+Beach+Transit+Mall%22&t=h&cad=src:ppiwlink&ei=BrRjT6XbNImYowTxqO3qBQ&dtab=2', 'W on 1st St ONLY', '0'],
['East LA Civic Center Station', 104.3, 36.6, 'Gold', 'No', 'No', '0', '0', '20', '258', 'riding_metro/bus_overview/images/804.pdf', '4780+E+3rd+St%2C+Los+Angeles+90022', 'place?ftid=0x80c2cf76681c2da7:0xbc1268536d0c62d6&q=type:transit_station:%22East+LA+Civic+Center+Station%22&t=h&cad=src:ppiwlink&ei=9L5jT8vKGY7kowSYg6DvBQ&dtab=2', 'All', '0'],
['El Monte', 133.8, 54.8, 'Silver', 'Yes', 'No', '1,153', '8', '24', '70, 76, 176, 268, 270, 487, 577, 770, 190/194, 264/267', 'riding_metro/bus_overview/images/910.pdf', '3501+Santa+Anita+Av%2C+El+Monte+91731', 'place?ftid=0x80c2d09f3b29445d:0xc00e4d4531bac376&q=type:transit_station:%22El+Monte+Station+E%22&t=m&cad=src:ppiwlink&ei=h4RnT8iTDoiSpgS1s-mQCA&dtab=2', 'All', '0'],
['El Segundo Station', -89.3, -65.4, 'Green', 'Yes', 'No', '91', '8', '14', '232', 'riding_metro/bus_overview/images/803.pdf', '2226+E+El+Segundo+Bl%2C+El+Segundo+90245', 'place?ftid=0x80c2b6ae8361bfbf:0x61ec4c4cb681808b&q=type:transit_station:%22El+Segundo+Station%22&t=h&cad=src:ppiwlink&ei=4b1jT6DnJKrYiQLH8bH-BQ&dtab=2', 'All', '4'],
['Expo Park/USC Station', -23, 9.2, 'Expo', 'No', 'No', '0', '0', '10', '81, 102, 200, 442, 460, 550', 'riding_metro/bus_overview/images/806.pdf', '661+Exposition+Bl%2C+Los+Angeles+90089', 'place?ftid=0x80c2c7e2eeff8719:0xa169127d40bc1416&q=Expo+park+/+USC+Station,+Los+Angeles,+CA&hl=en&ved=0CA8Q-gswAA&sa=X&ei=CkO1T4jdGJSQpgS14JGkDw', 'All', '0'],
['Expo/Crenshaw Station', -49, 9.2, 'Expo', 'Yes', 'No', '450', '0', '10', '38, 210, 710, 740', 'riding_metro/bus_overview/images/806.pdf', '3428+Exposition+Bl%2C+Los+Angeles+90018', 'place?ftid=0x80c2b83784fa268f:0x9ce17c108946e080&q=Expo+/+Crenshaw+Station,+Los+Angeles,+CA&hl=en&ved=0CBEQ-gswAA&sa=X&ei=tUK1T9OmM4PsowTyyoHIDg', 'All', '0'],
['Expo/La Brea Station', -66.2, 9.2, 'Expo', 'No', 'No', '0', '0', '20', '38, 212/312', 'riding_metro/bus_overview/images/806.pdf', '5060+Exposition+Bl%2C+Los+Angeles+90016', 'place?q=Expo+%2F+la+brea+Station,+Los+Angeles,+CA&hl=en&ftid=0x80c2b9b0d4dec207:0x6aac84d42e17aec5', 'All', '0'],
['Expo/Vermont Station', -32, 9.2, 'Expo', 'No', 'No', '0', '0', '10', '102, 204, 550, 754', 'riding_metro/bus_overview/images/806.pdf', '1043+Exposition+Bl%2C+Los+Angeles+90007', 'place?ftid=0x80c2c7fc457c978b:0xe6b2714940d665b4&q=Expo+/+vermont+Station,+Los+Angeles,+CA&hl=en&ved=0CBEQ-gswAA&sa=X&ei=7EK1T7ipEpzkpgT-zOCxDg', 'Vermont ONLY', '0'],
['Expo/Western Station', -40.5, 9.2, 'Expo', 'No', 'No', '0', '0', '10', '207, 757', 'riding_metro/bus_overview/images/806.pdf', '1573+Exposition+Bl%2C+Los+Angeles+90018', 'place?ftid=0x80c2b804fd4e08a9:0xdf47d02a42ffdb88&q=Expo+/+western+Station,+Los+Angeles,+CA&hl=en&ved=0CBEQ-gswAA&sa=X&ei=-kK1T8WYGYbKowSpsby3Dg', 'All', '0'],
['Farmdale Station', -57.5, 9.2, 'Expo', 'No', 'No', '0', '0', '10', '38', 'riding_metro/bus_overview/images/806.pdf', '4420+Exposition+Bl%2C+Los+Angeles+90016', 'place?q=type:transit_station:%22Farmdale+Station%22&ftid=0x80c2b84ad31f3ccd:0xb1b5783b4b6dd10f', 'All', '0'],
['Fillmore Station', 82.5, 75.7, 'Gold', 'Yes', 'Yes', '160', '0', '6', '177, 256, 260, 762, 686/687', 'riding_metro/bus_overview/images/804.pdf', '95+Fillmore+St%2C+Pasadena+91105', 'place?ftid=0x80c2c37d457de9c5:0x1361f323e6d0d9b&q=type:transit_station:%22Fillmore+Station%22&t=h&cad=src:ppiwlink&ei=BL9jT63QN-TniAKLnrSHBg&dtab=2', 'All', '0'],
['Firestone Station', 22.15, -37.9, 'Blue', 'No', 'No', '0', '0', '8', '115, 254, 55/355', 'riding_metro/bus_overview/images/801.pdf', '8615+Graham+Av%2C+Los+Angeles+90002', 'place?ftid=0x80c2c9719a5f8695:0x9cc1d64ee6d7d43&q=type:transit_station:%22Firestone+Station%22&t=m&cad=src:ppiwlink&ei=X7BjT76MHp_CpgTBpKn-BQ&dtab=2', 'Elevator ONLY', '0'],
['Florence Station', 22.15, -29.5, 'Blue', 'Yes', 'Yes', '115', '0', '12', '102, 110, 611, 111/311', 'riding_metro/bus_overview/images/801.pdf', '7225+Graham+Av%2C+Los+Angeles+90002', 'place?ftid=0x80c2c90fa3027b87:0x4b533f33f2befcd8&q=type:transit_station:%22Florence+Station%22&t=m&cad=src:ppiwlink&ei=brBjT9rxNI_CpgSntfHrAw&dtab=2', 'All', '0'],
['Grand Station', 8.7, 19.4, 'Blue', 'No', 'No', '0', '0', '0', '14, 35, 37, 38, 81, 460, 603, 55/355', 'riding_metro/bus_overview/images/801.pdf', '331-Ã�â��Ã�Â½+W+Washington+Bl%2C+Los+Angeles+90015', 'place?ftid=0x80c2c7c48c48a57d:0xf845289defd9fce9&q=type:transit_station:%22Grand+Station%22&t=m&cad=src:ppiwlink&ei=k7BjT66bI4qspgT7l6z7BQ&dtab=2', 'East ONLY', '0'],
['Harbor Freeway Station', -16.3, -53.1, 'Green, Silver', 'Yes', 'No', '253', '0', '10', '45, 81, 120, 246, 450, 550, 745', 'around/maps', '11500+S+Figueroa+St%2C+Los+Angeles+90048', 'place?ftid=0x80c2ca196f9de5ef:0x5a04f8efa85522d3&q=type:transit_station:%22Harbor+Freeway+Station%22&t=h&cad=src:ppiwlink&ei=qL1jT8uWJ6vTiALj9tm7BA&dtab=2', 'All', '0'],
['Harbor Freeway Station', -14.1, -54.7, 'Green, Silver', 'Yes', 'No', '253', '0', '10', '45, 81, 120, 246, 450, 550, 745', 'around/maps', '11500+S+Figueroa+St%2C+Los+Angeles+90048', 'place?ftid=0x80c2ca196f9de5ef:0x5a04f8efa85522d3&q=type:transit_station:%22Harbor+Freeway+Station%22&t=h&cad=src:ppiwlink&ei=qL1jT8uWJ6vTiALj9tm7BA&dtab=2', 'All', '0'],
['Harbor Gateway Transit Center', -16.3, -73.5, 'Silver', 'Yes', 'No', '980', '16', '6', '130, 205, 246, 344, 450, 550, 52/352', 'riding_metro/bus_overview/images/910.pdf', '731+W+182nd+St%2C+Gardena+90248', 'place?ftid=0x80c2cabccd1fb25f:0x538a0d81ef3715a3&q=type:transit_station:%22Artesia+Transit+Center+(Bay+5)%22&t=h&cad=src:ppiwlink&ei=275jT8a_EazciQKC6MSDBA&dtab=2', 'All', '0'],
['Hawthorne/Lennox Station', -68, -54.7, 'Green', 'Yes', 'No', '623', '0', '4', '40, 120, 126, 212/312', 'riding_metro/bus_overview/images/803.pdf', '11230+S+Acacia+St%2C+Inglewood+90304', 'place?ftid=0x80c2b68c04885497:0x3555721d37f458c6&q=type:transit_station:%22Hawthorne+Station%22&t=h&cad=src:ppiwlink&ei=w71jT625GOPJiQLgvZyQBg&dtab=2', 'All', '0'],
['Heritage Square Station', 53.7, 68, 'Gold', 'Yes', 'No', '129', '0', '4', '83', 'riding_metro/bus_overview/images/804.pdf', '3545+Pasadena+Av%2C+Los+Angeles+90031', 'place?ftid=0x80c2c69b6fb371d7:0xbee9a2d464ae93e9&q=type:transit_station:%22Heritage+Square+/+Arroyo+Station%22&t=h&cad=src:ppiwlink&ei=Dr9jT6GYF6aoiAKh8tWBBg&dtab=2', 'All', '0'],
['Highland Park Station', 67.6, 72.8, 'Gold', 'No', 'No', '0', '16', '10', '81, 83, 256', 'riding_metro/bus_overview/images/804.pdf', '151+N+Avenue+57%2C+Los+Angeles+90042', 'place?ftid=0x80c2c41021bebc69:0xe295754d01d63c92&q=type:transit_station:%22Highland+Park+Station%22&t=h&cad=src:ppiwlink&ei=Fb9jT9r0MobjiAKMm52NBg&dtab=2', 'All', '0'],
['Hollywood/Highland Station', -27.4, 73.9, 'Red', 'No', 'Yes', '3,000', '0', '0', '156, 217, 222, 212/312', 'riding_metro/bus_overview/images/802.pdf', '6801+Hollywood+Bl%2C+Los+Angeles+90028', 'place?ftid=0x80c2bf2392a4464d:0x8af4dd836b3b77&q=type:transit_station:%22Highland+/+Hollywood%22&hl=en&t=m&cad=src:ppiwlink&ei=8p9nT7fTKafCpgTpt_X9Bw&dtab=2', 'All', '0'],
['Hollywood/Vine Station', -20.4, 71.7, 'Red', 'No', 'No', '0', '0', '12', '210, 217, 222, 780, 180/181, 212/312', 'riding_metro/bus_overview/images/802.pdf', '6250+Hollywood+Bl%2C+Los+Angeles+90038', 'place?ftid=0x80c2bf39121b8f85:0x63a22910c0ce164f&q=type:transit_station:%22Hollywood+/+Vine+Station%22&t=m&cad=src:ppiwlink&ei=_oJnT5rlIJT8iQLvktyWCA&dtab=2', 'All', '0'],
['Hollywood/Western Station', -13.8, 69.4, 'Red', 'No', 'No', '0', '2', '36', '207, 217, 757, 780, 180/181', 'riding_metro/bus_overview/images/802.pdf', '5450+Hollywood+Bl%2C+Los+Angeles+90028', 'place?ftid=0x80c2bf50f5477571:0xc4003a1b3b1d8c7&q=type:transit_station:%22Hollywood+/+Western+Station%22&t=m&cad=src:ppiwlink&ei=DoNnT8jvBIvYiAKBtbGSCA&dtab=2', 'All', '0'],
['Indiana Station', 84.1, 36.6, 'Gold', 'Yes', 'No', '42', '4', '12', '30, 68, 254, 620, 665', 'riding_metro/bus_overview/images/804.pdf', '210+S+Indiana+St%2C+Los+Angeles+90063', 'place?ftid=0x80c2cf5a242c4d35:0x6fe4e45808f5de3d&q=type:transit_station:%22Indiana+Station%22&t=h&cad=src:ppiwlink&ei=38BjT7qQMrKMigKy2NTfBA&dtab=2', 'All', '0'],
['Jefferson/USC Station', -13.8, 15.2, 'Expo', 'No', 'No', '0', '0', '10', '38, 81, 102, 200, 442', 'riding_metro/bus_overview/images/806.pdf', '3214+S+Flower+St%2C+Los+Angeles+90007', 'place?ftid=0x80c2c7e0e846f445:0xb4f8c46ecfd4352d&q=Jefferson+/+USC+Station,+Los+Angeles,+CA&hl=en&ved=0CBEQ-gswAA&sa=X&ei=IEO1T738GIaKpASE8vTaDg', 'All', '0'],
['La Cienega/Jefferson Station', -74.8, 9.2, 'Expo', 'Yes', 'No', '476', '40', '12', '38, 105, 217, 705', 'riding_metro/bus_overview/images/806.pdf', '5664+W+Jefferson+Bl%2C+Los+Angeles+90016', 'place?q=type:transit_station:%22La+Cienega+%2F+Jefferson+Station%22&hl=en&ftid=0x80c2b99831898d79:0x3c0deea82ff976a', 'All', '0'],
['LAC+USC Medical Center', 82.5, 54.8, 'Silver', 'No', 'No', '0', '0', '0', '251, 620', 'riding_metro/bus_overview/images/910.pdf', '1930+Pomeroy+Av%2C+Los+Angeles+90033', 'place?ftid=0x80c2c674ad57f405:0xcb171d927ba16f9c&q=type:transit_station:%22USC+Medical+Center+Busway+Station%22&t=m&cad=src:ppiwlink&ei=M4VnT97vCoyGiQKSsbmJBg&dtab=2', 'All', '0'],
['Lake Station', 110.7, 75.7, 'Gold', 'No', 'Yes', '50', '0', '18', '180, 485', 'riding_metro/bus_overview/images/804.pdf', '340+N+Lake+Av%2C+Pasadena+91101', 'place?ftid=0x80c2c343d5036f99:0x95f90d3fe06f422d&q=type:transit_station:%22Lake+Station%22&t=h&cad=src:ppiwlink&ei=58BjT82nHIe4oQTf0-T_BQ&dtab=2', 'All', '0'],
['Lakewood Bl Station', 61.6, -54.7, 'Green', 'Yes', 'No', '414', '12', '22', '117, 265, 266', 'riding_metro/bus_overview/images/803.pdf', '12801+Lakewood+Av%2C+Downey+90241', 'place?ftid=0x80c2cd1416d77649:0xbbf9cb9c2a7efd90&q=type:transit_station:%22Lakewood+Station%22&t=h&cad=src:ppiwlink&ei=b71jT5azM8TmiAK-3tX9BQ&dtab=2', 'All', '0'],
['Laurel Canyon Station', -53.7, 76.85, 'Orange', 'No', 'No', '0', '8', '8', '230, 156/256', 'riding_metro/bus_overview/images/901.pdf', '5371+Laurel+Canyon+Bl%2C+North+Hollywood+91607', 'place?ftid=0x80c2960bc4f99bd9:0xfc421f6a45817dff&q=type:transit_station:%22Laurel+Canyon+Station%22&t=m&cad=src:ppiwlink&ei=d3lnT-6FH4iAowS5_fGbCQ&dtab=2', 'All', '0'],
['Lincoln/Cypress Station', 50.35, 64.45, 'Gold', 'Yes', 'Yes', '94', '0', '10', '251, 751', 'riding_metro/bus_overview/images/804.pdf', '370+W+Avenue+26%2C+Los+Angeles+90031', 'place?ftid=0x80c2c68f068876ef:0x539a6a9e1ad7fa34&q=type:transit_station:%22Lincoln+Heights+/+Cypress+Park+Station%22&t=h&cad=src:ppiwlink&ei=8MBjT-6OKoSuoQSjjOz4DQ&dtab=2', 'All', '0'],
['Little Tokyo/Arts District Station', 50.35, 46.3, 'Gold', 'No', 'No', '0', '4', '12', '30, 330', 'riding_metro/bus_overview/images/804.pdf', '200+N+Alameda+St%2C+Los+Angeles+90012', 'place?ftid=0x80c2c6477522bd0f:0xacfdb2ddd912a307&q=type:transit_station:%22Little+Tokyo+/+Arts+District+Station%22&t=h&cad=src:ppiwlink&ei=-MBjT-HGPIvYiALOnbzoBQ&dtab=2', 'All', '0'],
['Long Beach Bl Station', 41.6, -54.7, 'Green', 'Yes', 'No', '646', '0', '8', '60, 251, 760', 'riding_metro/bus_overview/images/803.pdf', '11508+Long+Beach+Bl%2C+Lynwood+90262', 'place?ftid=0x80c2cb88e1676027:0xf0f76288d6534f3e&q=type:transit_station:%22Long+Beach+Station%22&t=h&cad=src:ppiwlink&ei=fr1jT-6xIs3TiAKtw5H_BA&dtab=2', 'All', '0'],
['Manchester', -16.3, -38.9, 'Silver', 'Yes', 'No', '247', '0', '0', '45, 81, 115, 305, 460, 550, 745', 'riding_metro/bus_overview/images/910.pdf', '452+Ã�â��Ã�Â½+W+Manchester+Av%2C+Los+Angeles+90003', 'place?ftid=0x80c2c9c16f30e479:0xfbb7ce0be3b0bcb6&q=type:transit_station:%22Harbor+Transitway+/+Manchester%22&t=m&cad=src:ppiwlink&ei=SoVnT5TrFafCpgTpt_X9Bw&dtab=2', 'N or S on Manchester Av ONLY', '0'],
['Maravilla Station', 94.2, 36.6, 'Gold', 'No', 'No', '0', '0', '12', '256', 'riding_metro/bus_overview/images/804.pdf', '4520+E+3rd+St%2C+Los+Angeles+90022', 'place?ftid=0x80c2cf7056be620d:0xbea3ceddd654a2b7&q=type:transit_station:%22Maravilla+Station%22&t=h&cad=src:ppiwlink&ei=AMFjT4rAN42oowTmx-SABg&dtab=2', 'All', '0'],
['Mariachi Plaza Station', 63.5, 36.6, 'Gold', 'No', 'No', '0', '0', '6', '30, 620', 'riding_metro/bus_overview/images/804.pdf', '1831+E+1st+St%2C+Los+Angeles+90033', 'place?ftid=0x80c2c611970949cb:0xf550ecc38184178f&q=type:transit_station:%22Mariachi+Plaza+/+Boyle+Heights+Station%22&t=h&cad=src:ppiwlink&ei=C8FjT_HzO4nyowTF2qzrBQ&dtab=2', 'All', '0'],
['Mariposa Station', -89.3, -60, 'Green', 'No', 'No', '0', '0', '4', '232', 'riding_metro/bus_overview/images/803.pdf', '555+N+Nash+St%2C+El+Segundo+90245', 'place?ftid=0x80c2b6b3e76b3517:0x3ab7e6260194e00f&q=type:transit_station:%22Mariposa+Station%22&t=h&cad=src:ppiwlink&ei=271jT4a9F4fRiAKptOiLBg&dtab=2', 'All', '0'],
['Memorial Park Station', 101.5, 75.7, 'Gold', 'No', 'No', '0', '16', '8', '177, 256, 260, 180/181, 686/687', 'riding_metro/bus_overview/images/804.pdf', '125+E+Holly+St%2C+Pasadena+91103', 'place?ftid=0x80c2c371fba702dd:0xbaf068374a6fb4d&q=type:transit_station:%22Memorial+Park+Station%22&t=h&cad=src:ppiwlink&ei=F8FjT4_WDYquiQLvtoiMBg&dtab=2', 'All', '0'],
['Nordhoff Station', -157.8, 82.5, 'Orange', 'No', 'No', '0', '8', '6', '166, 364', 'riding_metro/bus_overview/images/901.pdf', '21385+Nordhoff+St%2CChatsworth+91311', 'place?q=type:transit_station:%22Nordhoff+Station%22&hl=en&ftid=0x80c29c918af609d7:0x83be2c1d0e6954a5', 'All', '0'],
['North Hollywood Station', -44.8, 76.85, 'Red, Orange', 'Yes', 'Yes', '952', '44', '101', '154, 162, 183, 224, 152/353, 156/656', 'around/maps', '5391+Lankershim+Bl%2C+North+Hollywood+91601', 'place?ftid=0x80c295ee13fa82a1:0x4940a0c6d1e4e53&q=type:transit_station:%22North+Hollywood+Station%22&t=m&cad=src:ppiwlink&ei=aINnT92KL4iriQL4nOX2BQ&dtab=2', 'All', '0'],
['North Hollywood Station', -39.9, 76.85, 'Red, Orange', 'Yes', 'Yes', '952', '44', '101', '154, 162, 183, 224, 152/353, 156/656', 'around/maps', '5391+Lankershim+Bl%2C+North+Hollywood+91601', 'place?ftid=0x80c295ee13fa82a1:0x4940a0c6d1e4e53&q=type:transit_station:%22North+Hollywood+Station%22&t=m&cad=src:ppiwlink&ei=aINnT92KL4iriQL4nOX2BQ&dtab=2', 'All', '0'],
['Norwalk Station', 81.2, -54.7, 'Green', 'Yes', 'No', '1,502', '40', '36', '115, 125, 270, 460, 111/311', 'riding_metro/bus_overview/images/803.pdf', '12901+Hoxie+Av%2C+Norwalk+90650', 'place?ftid=0x80c2d2a3be3b76b9:0x51e36deea70766ad&q=type:transit_station:%22Norwalk+Station%22&t=h&cad=src:ppiwlink&ei=fL5jT9aPBIbjiAKMm52NBg&dtab=2', 'All', '0'],
['Pacific Av Station', 11.6, -81.8, 'Blue', 'No', 'No', '0', '0', '0', '60, 232', 'riding_metro/bus_overview/images/801.pdf', '498+Pacific+Av%2C+Long+Beach+90802', 'place?ftid=0x80dd31380422f257:0xfacfc8ba2e28faaa&q=type:transit_station:%22Pacific+Station%22&t=m&cad=src:ppiwlink&ei=trBjT5K3PI3IowTfm727BA&dtab=2', 'N on 5th St ONLY', '0'],
['Pacific Coast Highway Station', 22.15, -78.2, 'Blue', 'No', 'No', '0', '0', '0', '60', 'riding_metro/bus_overview/images/801.pdf', '1798+N+Long+Beach+Bl%2C+Long+Beach+90813', 'place?ftid=0x80dd31595b43eec3:0xe12f5aa3d35b3ac6&q=type:transit_station:%22PCH+Station%22&t=m&cad=src:ppiwlink&ei=wrBjT4zgHJCopgTCg4iDBA&dtab=2', 'South ONLY', '0'],
['Pershing Square Station', 19.2, 45.9, 'Red, Purple', 'No', 'No', '0', '0', '4', '4, 10, 14, 18, 37, 48, 53, 62, 70, 71, 76, 81, 83, 94, 96, 460, 720, 728, 770, 794, 16/316, 2/302, 487/489, 55/355, 68/84, 78/79/378, 90/91', 'riding_metro/bus_overview/images/802.pdf', '500+S+Hill+St%2C+Los+Angeles+90013', 'place?ftid=0x80c2c64b3a0c86b7:0xbdd4569b67af8646&q=type:transit_station:%22Pershing+Square+Station%22&t=m&cad=src:ppiwlink&ei=goNnT_jUMZSNigKAtsn6Bw&dtab=2', '5th St/Hill St', '0'],
['Pico Station', 3.3, 30.8, 'Blue, Expo', 'No', 'No', '0', '0', '0', '30, 81, 442, 460', 'around/maps', '1236+S+Flower+St%2C+Los+Angeles+90015Ã�â��Ã�Â ', 'place?ftid=0x80c2c7c7bd6abd35:0x3eeb8d2acd150073&q=type:transit_station:%22Pico+Station%22&t=m&cad=src:ppiwlink&ei=VIRnT77sN6WYpwS-y5iECA&dtab=2', 'South ONLY', '0'],
['Pico/Aliso Station', 54.3, 39.6, 'Gold', 'No', 'No', '0', '2', '6', '30', 'riding_metro/bus_overview/images/804.pdf', '1311+E+1st+St%2C+Los+Angeles+90033', 'place?ftid=0x80c2c614315d5c89:0x1aa53a02c825cb49&q=type:transit_station:%22Pico+/+Aliso+Station%22&t=h&cad=src:ppiwlink&ei=GMpjT7GjIISsiQL3nKDSAw&dtab=2', 'All', '0'],
['Pierce College Station', -138.2, 76.85, 'Orange', 'Yes', 'No', '373', '8', '12', '164, 243', 'riding_metro/bus_overview/images/901.pdf', '6425+Winnetka+Av%2C+Woodland+Hills+91367', 'place?ftid=0x80c29956fc28ecc7:0xf10c2d94b8e0d387&q=type:transit_station:%22Pierce+College+Station%22&t=m&cad=src:ppiwlink&ei=gHlnT7DANLKMigLS9IGOBA&dtab=2', 'All', '0'],
['Redondo Beach Station', -89.3, -73.5, 'Green', 'Yes', 'No', '403', '6', '12', '126, 215', 'riding_metro/bus_overview/images/803.pdf', '2406+Marine+Av%2C+Redondo+Beach+90278', 'place?ftid=0x80c2b43fd8bf5a95:0xc39ac981d9cade1b&q=type:transit_station:%22Redondo+Beach+Station%22&t=h&cad=src:ppiwlink&ei=871jT_vJLYeYoQTvrKHlBQ&dtab=2', 'All', '0'],
['Reseda Station', -119.2, 76.85, 'Orange', 'Yes', 'No', '522', '16', '6', '240, 741', 'riding_metro/bus_overview/images/901.pdf', '6065+N+Reseda+Bl%2C+Tarzana+91335', 'place?ftid=0x80c29974e2dd8007:0xe0cdbdcc486425f7&q=type:transit_station:%22Reseda+/+Orange+Line%22&t=m&cad=src:ppiwlink&ei=iHlnT_qoHIfEpgTr4bSCBg&dtab=2', 'All', '0'],
['Roscoe Station', -157.8, 81, 'Orange', 'No', 'No', '0', '8', '6', '152, 353', 'riding_metro/bus_overview/images/901.pdf', '21386+Roscoe+Blvd%2CCanoga+Park+91304', 'place?q=type:transit_station:%22Roscoe+Station%22&hl=en&ftid=0x80c29c63e1811ccb:0xa68d4de8c2f60f14', 'All', '0'],
['Rosecrans', -16.3, -65.5, 'Silver', 'Yes', 'No', '338', '0', '0', '125, 246, 550', 'riding_metro/bus_overview/images/910.pdf', '622+W+Rosecrans+Av%2C+Los+Angeles+90248', 'place?ftid=0x80c2ca65381f3fdd:0x2bd931edfb5b100d&q=type:transit_station:%22Rosecrans+/+Harbor+Fwy%22&t=m&cad=src:ppiwlink&ei=i4JnT4GUBOeTiQK2s9SPBg&dtab=2', 'S on Rosecrans Av ONLY', '0'],
['San Pedro St Station', 16.6, 12.4, 'Blue', 'No', 'No', '0', '0', '0', '51/52/352', 'riding_metro/bus_overview/images/801.pdf', '767+E+Washington+Bl%2C+Los+Angeles+90021', 'place?ftid=0x80c2c7d45a767481:0xb6a8ac37baabfe80&q=type:transit_station:%22San+Pedro+Station%22&t=m&cad=src:ppiwlink&ei=zrBjT_KSKpKOowTxn4H_BQ&dtab=2', 'All', '0'],
['Sepulveda Station', -91, 76.85, 'Orange', 'Yes', 'No', '1,205', '12', '12', '234, 734', 'riding_metro/bus_overview/images/901.pdf', '15430+W+Erwin+St%2C+Van+Nuys+91411', 'place?ftid=0x80c2977157ec25af:0x7c59a041cb870ecc&q=type:transit_station:%22Sepulveda+Station%22&t=m&cad=src:ppiwlink&ei=lHlnT-GxN4aYoQTtlbn5BQ&dtab=2', 'All', '0'],
['Sherman Way Station', -157.8, 79.1, 'Orange', 'Yes', 'No', '207', '16', '12', '162, 163', 'riding_metro/bus_overview/images/901.pdf', '21384+Sherman+Way%2CCanoga+Park+91303', 'place?q=type:transit_station:%22Sherman+Way+Station%22&hl=en&ftid=0x80c29c138a474acd:0xfe28089334c66d1b', 'All', '0'],
['Sierra Madre Villa Station', 130.3, 75.7, 'Gold', 'Yes', 'Yes', '965', '16', '10', '177, 181, 264, 266, 268, 487', 'riding_metro/bus_overview/images/804.pdf', '149+N+Halstead%2C+Pasadena+91107', 'place?ftid=0x80c2db6241507b29:0x484565814dbaf2d7&q=type:transit_station:%22Sierra+Madre+Villa+Station%22&t=h&cad=src:ppiwlink&ei=pbVjT67PK42gowTjtfyGDg&dtab=2', 'All', '4'],
['Slauson', -16.3, -21.2, 'Silver', 'Yes', 'No', '151', '0', '0', '45, 81, 460, 550, 745, 108/358', 'riding_metro/bus_overview/images/910.pdf', '350+Ã�â��Ã�Â½+W+Slauson+Av%2C+Los+Angeles+90003', 'place?ftid=0x80c2c839be84a2f7:0xaa3c732900236ac7&q=type:transit_station:%22Harbor+Transitway+/+Slauson%22&t=h&cad=src:ppiwlink&ei=xbNjT7KTK4aYoQTtlbn5BQ&dtab=2', 'S on Slauson Av ONLY', '0'],
['Slauson Station', 22.15, -20, 'Blue', 'No', 'No', '0', '0', '4', '108/358', 'riding_metro/bus_overview/images/801.pdf', '5585+Randolph+St%2C+Los+Angeles+90032', 'place?ftid=0x80c2c8fcfc5530d5:0x6719e61c1bcefa02&q=slauson+station&hl=en&ved=0CA8Q-gswAA&sa=X&ei=UbNjT6ipDKaoiAKh8tWBBg', 'Elevator ONLY', '0'],
['Soto Station', 73.6, 36.6, 'Gold', 'No', 'No', '0', '4', '12', '30, 251, 252, 605, 751', 'riding_metro/bus_overview/images/804.pdf', '2330+E+1st+St%2C+Los+Angeles+90033', 'place?ftid=0x80c2c606431f28a5:0x3985a70b462d5a93&q=type:transit_station:%22Soto+Station%22&t=h&cad=src:ppiwlink&ei=LMpjT8TKEpHiowT9ksz0BQ&dtab=2', 'All', '0'],
['South Pasadena Station', 74.6, 74.7, 'Gold', 'No', 'Yes', '142', '0', '14', '176', 'riding_metro/bus_overview/images/804.pdf', '905+Meridian+Av%2C+South+Pasadena+91030', 'place?ftid=0x80c2c489f361f9fd:0x672ca55105eb8a30&q=type:transit_station:%22Mission+Station%22&t=h&cad=src:ppiwlink&ei=IMFjT432E43IowTfm727BA&dtab=2', 'NB: Mission; SB: El Centro/Santa Fe', '0'],
['Southwest Museum Station', 60.6, 70.7, 'Gold', 'No', 'No', '0', '0', '6', '81, 83', 'riding_metro/bus_overview/images/804.pdf', '4600+Marmion+Way%2C+Los+Angeles+90065', 'place?ftid=0x80c2c6a01a970cbd:0x4400f46660eaca46&q=type:transit_station:%22Southwest+Museum+Station%22&t=h&cad=src:ppiwlink&ei=rcpjT6zUJpSUpgSQld2CBg&dtab=2', 'All', '0'],
['Tampa Station', -128.7, 76.85, 'Orange', 'No', 'No', '0', '16', '12', '242', 'riding_metro/bus_overview/images/901.pdf', '6101+Tampa+Av%2C+Tarzana+91335', 'place?ftid=0x80c29969a843fbeb:0x25f76546ad9f893b&q=type:transit_station:%22Tampa+/+Orange+Line%22&t=m&cad=src:ppiwlink&ei=oHlnT9v6GYu2pQSB-6TkBQ&dtab=2', 'All', '0'],
['Union Station', 50.35, 52.8, 'Red, Purple, Gold', 'No', 'Yes', '1,860', '0', '0', '33, 68, 70, 71, 439, 485, 704, 728, 733, 745, 770, 40/42, 487/489, 78/79/378', 'around/maps', '801+N+Vignes+St%2C+Los+Angeles+90012', 'place?ftid=0x80c2c643f4a7aaaf:0x77a5ff11aa860633&q=type:transit_station:%22Union+Station%22&t=h&cad=src:ppiwlink&ei=v8pjT8OtPITkpgSp3oj6BQ&dtab=2', 'N/A', '4'],
['Union Station', 47.1, 52.8, 'Red, Purple, Gold', 'No', 'Yes', '1,860', '0', '0', '33, 68, 70, 71, 439, 485, 704, 728, 733, 745, 770, 40/42, 487/489, 78/79/378', 'around/maps', '801+N+Vignes+St%2C+Los+Angeles+90012', 'place?ftid=0x80c2c643f4a7aaaf:0x77a5ff11aa860633&q=type:transit_station:%22Union+Station%22&t=h&cad=src:ppiwlink&ei=v8pjT8OtPITkpgSp3oj6BQ&dtab=2', 'All', '4'],
['Union Station', 56.7, 52.8, 'Silver', 'No', 'Yes', '1,860', '0', '0', '33, 68, 70, 71, 485, 704, 728, 733, 745, 770, 40, 487/489, 78/79/378', 'riding_metro/bus_overview/images/910.pdf', '801+N+Vignes+St%2CLos+Angeles+90012', 'place?q=type:transit_station:%22El+Monte+Busway+%2F+Alameda+-+Union+Station%22&ftid=0x80c2c64427ab8a8d:0x6fad3728e17c656a', 'All', '4'],
['Universal City/Studio City Station', -34.4, 75.6, 'Red', 'Yes', 'Yes', '899', '32', '16', '96, 155, 224, 750, 150/240', 'riding_metro/bus_overview/images/802.pdf', '3913+Lankershim+Bl%2C+Studio+City+91604', 'place?ftid=0x80c2be4740981953:0x5101b59d70e19bf0&q=type:transit_station:%22Universal+City+Station%22&t=m&cad=src:ppiwlink&ei=S4NnT8ikFY3diALB-YmPBg&dtab=2', 'North ONLY', '4'],
['Valley College Station', -62.8, 76.85, 'Orange', 'No', 'No', '0', '8', '8', '167, 156/656', 'riding_metro/bus_overview/images/901.pdf', '13240+W+Burbank%2C+Sherman+Oaks+91401', 'place?ftid=0x80c296440ccccb6f:0x8bd447094c16b164&q=type:transit_station:%22Valley+College+Station%22&t=m&cad=src:ppiwlink&ei=qnlnT_2HBoS0pQSkhrn8BQ&dtab=2', 'All', '0'],
['Van Nuys Station', -81.8, 76.85, 'Orange', 'Yes', 'No', '776', '8', '12', '154, 233, 237, 761, 156/656', 'riding_metro/bus_overview/images/901.pdf', '6062+Van+Nuys+Bl%2C+Van+Nuys+91411', 'place?ftid=0x80c297077f0abf49:0xf3637945c67e8d14&q=type:transit_station:%22Van+Nuys+Station%22&t=m&cad=src:ppiwlink&ei=soFnT5zdKZS2owTF4937BQ&dtab=2', 'All', '0'],
['Vermont/Athens Station', -33.6, -54.7, 'Green', 'Yes', 'No', '155', '0', '8', '120, 204, 206, 209, 754', 'riding_metro/bus_overview/images/803.pdf', '11603+S+Vermont+Av%2C+Los+Angeles+90048', 'place?ftid=0x80c2ca0393a811df:0x4636a0daf6676fa6&q=type:transit_station:%22Vermont+Station%22&t=h&cad=src:ppiwlink&ei=sr1jT8TtIIbjiAKMm52NBg&dtab=2', 'All', '0'],
['Vermont/Beverly Station', -11.6, 56.2, 'Red', 'No', 'No', '0', '0', '24', '10, 14, 204, 754', 'riding_metro/bus_overview/images/802.pdf', '301+N+Vermont+Av%2C+Los+Angeles+90004', 'place?ftid=0x80c2c75d89eba75f:0x4c4ee68812feeee2&q=type:transit_station:%22Vermont+/+Beverly+Station%22&t=m&cad=src:ppiwlink&ei=U4NnT6v6GqrjiAKUwfnyBQ&dtab=2', 'All', '0'],
['Vermont/Santa Monica Station', -11.6, 61.6, 'Red', 'No', 'No', '0', '4', '26', '4, 204, 704, 754', 'riding_metro/bus_overview/images/802.pdf', '1015+N+Vermont+Av%2C+Los+Angeles+90029', 'place?ftid=0x80c2c75110aeddad:0xcd9510062dd1064&q=type:transit_station:%22Vermont+/+Santa+Monica+Station%22&t=m&cad=src:ppiwlink&ei=WYNnT4WOHsaViQK2q_WGBg&dtab=2', 'All', '0'],
['Vermont/Sunset Station', -11.6, 66.2, 'Red', 'No', 'No', '0', '4', '10', '175, 204, 206, 217, 754, 2/302', 'riding_metro/bus_overview/images/802.pdf', '1500+N+Vermont+Av%2C+Los+Angeles+90027', 'place?ftid=0x80c2c0ace9ffeda3:0x93d640f7621ae557&q=type:transit_station:%22Vermont+/+Sunset+Station%22&t=m&cad=src:ppiwlink&ei=YINnT_byD5T8iQLvktyWCA&dtab=2', 'All', '0'],
['Vernon Station', 22.15, -10, 'Blue', 'No', 'No', '0', '0', '0', '105, 611, 705', 'riding_metro/bus_overview/images/801.pdf', '4421+Long+Beach+Av%2C+Los+Angeles+90021', 'place?ftid=0x80c2c8f248ee4277:0xdea9af75e34f1b04&q=type:transit_station:%22Vernon+Station%22&t=h&cad=src:ppiwlink&ei=G7RjT5O5B4ewoQT73NzjBQ&dtab=2', 'All', '0'],
['Wardlow Station', 22.15, -73.5, 'Blue', 'Yes', 'Yes', '115', '16', '8', 'N/A', 'riding_metro/bus_overview/images/801.pdf', '3420+N+Pacific+Pl%2C+Long+Beach+90802', 'place?ftid=0x80dd338e6adcf46f:0x24f41e6026d90809&q=type:transit_station:%22Wardlow+Station%22&t=h&cad=src:ppiwlink&ei=1rRjT8uPL6zciQKC6MSDBA&dtab=2', 'S at Wardlow ONLY', '0'],
['Warner Center Station', -165.4, 76.85, 'Orange', 'No', 'No', '0', '0', '0', '161, 164, 165, 245, 645, 750, 150/240', 'riding_metro/bus_overview/images/901.pdf', '6101+Ã�â��Ã�Â½+Owensmouth+Av%2C+Canoga+Park+91367', 'place?ftid=0x80c29ea06c7b6b15:0x21213065785c86&q=type:transit_station:%22Warner+Center+Transit+Hub%22&t=m&cad=src:ppiwlink&ei=9XhnT-bEK5T4ogTmnrSPAw&dtab=2', 'All', '0'],
['Washington Station', 22.15, 1.4, 'Blue', 'No', 'No', '0', '0', '0', 'N/A', 'riding_metro/bus_overview/images/801.pdf', '1945+Long+Beach+Av%2C+Los+Angeles+90021', 'place?ftid=0x80c2c884e33e215b:0x3dd45751304d17bc&q=type:transit_station:%22Washington+Station%22&t=h&cad=src:ppiwlink&ei=6LRjT4z7HfS3iAKyreX3BQ&dtab=2', 'All', '0'],
['Westlake/MacArthur Park Station', -4.3, 43.2, 'Red, Purple', 'Yes', 'No', '18', '0', '18', '20, 200, 603, 720, 51/52/352', 'riding_metro/bus_overview/images/802.pdf', '660+S+Alvarado+St%2C+Los+Angeles+90057', 'place?ftid=0x80c2c7a1c1e8977f:0xeafd1e451aebe3bd&q=type:transit_station:%22Westlake+/+McArthur+Park+Station%22&t=m&cad=src:ppiwlink&ei=7oNnT8eVKYe0iQLO8uzzBw&dtab=2', 'All', '0'],
['Willow St Station', 22.15, -76.1, 'Blue', 'Yes', 'Yes', '899', '8', '16', '60', 'riding_metro/bus_overview/images/801.pdf', '2750+American+Av%2C+Long+Beach+90806', 'place?ftid=0x80dd33eee0999221:0xbbabff9e18381a32&q=type:transit_station:%22Willow+Station%22&t=h&cad=src:ppiwlink&ei=9LRjT4LaJI7kowSYg6DvBQ&dtab=2', 'All', '4'],
['Willowbrook Station', 22.15, -53.3, 'Blue, Green', 'Yes', 'No', '335', '6', '14', '120, 202, 205, 305, 612, 55/355', 'around/maps', '11611+Willowbrook+Av%2C+Los+Angeles+90059', 'place?q=type:transit_station:%22Willowbrook+(Rosa+Parks)+Station%22&ftid=0x80c2cbc7044f1b55:0x31cd525fa6d57ba6', 'All', '0'],
['Willowbrook Station', 24.9, -54.7, 'Blue, Green', 'Yes', 'No', '335', '6', '14', '120, 202, 205, 305, 612, 55/355', 'around/maps', '11611+Willowbrook+Av%2C+Los+Angeles+90059', 'place?q=type:transit_station:%22Willowbrook+(Rosa+Parks)+Station%22&ftid=0x80c2cbc7044f1b55:0x31cd525fa6d57ba6', 'All', '0'],
['Wilshire/Normandie Station', -28.3, 48.7, 'Purple', 'No', 'No', '0', '0', '0', '20, 206, 720', 'riding_metro/bus_overview/images/802.pdf', '3510+Wilshire+Bl%2C+Los+Angeles+90005', 'place?ftid=0x80c2b882f04b8709:0x634fcd3e56a55500&q=type:transit_station:%22Wilshire+/+Normandie+Station%22&t=m&cad=src:ppiwlink&ei=voJnT__bHeq0iQKZ56D7Bw&dtab=2', 'All', '0'],
['Wilshire/Vermont Station', -11.6, 50.3, 'Red, Purple', 'Yes', 'No', '65', '16', '8', '18, 20, 201, 204, 720, 754, 51/52/352', 'riding_metro/bus_overview/images/802.pdf', '3191+Wilshire+Bl%2C+Los+Angeles+90005', 'place?ftid=0x80c2c77a37c84e17:0x5c2d870374e8453d&q=type:transit_station:%22Wilshire+/+Vermont+Station%22&t=m&cad=src:ppiwlink&ei=94NnT4yIFeStiQL9-eT6BQ&dtab=2', 'Elevator ONLY', '0'],
['Wilshire/Vermont Station', -13.8, 48.7, 'Red, Purple', 'Yes', 'No', '65', '16', '8', '18, 20, 201, 204, 720, 754, 51/52/352', 'riding_metro/bus_overview/images/802.pdf', '3191+Wilshire+Bl%2C+Los+Angeles+90005', 'place?ftid=0x80c2c77a37c84e17:0x5c2d870374e8453d&q=type:transit_station:%22Wilshire+/+Vermont+Station%22&t=m&cad=src:ppiwlink&ei=94NnT4yIFeStiQL9-eT6BQ&dtab=2', 'Elevator ONLY', '0'],
['Wilshire/Western Station', -41.6, 48.7, 'Purple', 'No', 'No', '0', '16', '12', '18, 20, 66, 207, 209, 710, 720, 757', 'riding_metro/bus_overview/images/802.pdf', '3775+Wilshire+Bl%2C+Los+Angeles+90005', 'place?ftid=0x80c2b8852dcca0bb:0xe6baee380c97b01c&q=type:transit_station:%22Wilshire+/+Western+Station%22&t=m&cad=src:ppiwlink&ei=x4JnT7GJBYTYowTNuJGTCA&dtab=2', 'All', '0'],
['Woodley Station', -100.5, 76.85, 'Orange', 'No', 'No', '0', '8', '8', '164, 237', 'riding_metro/bus_overview/images/901.pdf', '6381+N+Woodley+Av%2C+Van+Nuys+91406', 'place?ftid=0x80c29763cd129513:0xd3737d3a242bc897&q=type:transit_station:%22Woodley+Station%22&t=m&cad=src:ppiwlink&ei=A4JnT8rQGZWKpASA2qT4Bw&dtab=2', 'All', '0'],
['Woodman Station', -72.3, 76.85, 'Orange', 'No', 'No', '0', '8', '12', '154, 158', 'riding_metro/bus_overview/images/901.pdf', '13620+W+Oxnard+St%2C+Sherman+Oaks+91401', 'place?ftid=0x80c29650c647b8c3:0x31a9b7f3141e6886&q=type:transit_station:%22Woodman+Station%22&t=m&cad=src:ppiwlink&ei=roJnT-C4IYTKowS1ubmICA&dtab=2', 'All', '0']
];


//Getting URL Variable
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}
//Legend Control
function showHide(shID) {
   if (document.getElementById(shID)) {
      if (document.getElementById(shID+'-show').style.display != 'none') {
         document.getElementById(shID+'-show').style.display = 'none';
		 fadeIn();
         document.getElementById(shID).style.display = 'block';
		 document.getElementById(shID+'-hide').style.display = 'inline';
      }
      else {
         document.getElementById(shID+'-show').style.display = 'inline';
		 fadeOut();
         //document.getElementById(shID).style.display = 'none';
		 document.getElementById(shID+'-hide').style.display = 'none';
      }
   }
}
//Function 1 Go to Google Maps
function HomeControl(homeControlDiv, homeControlDiv4, map) {
	//style
		  var pinkParksStyles = [
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "visibility": "simplified" },
      { "lightness": 100 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "visibility": "simplified" },
      { "weight": 5.2 },
      { "lightness": 70 },
      { "saturation": 100 }
    ]
  },{
    "featureType": "road.local",
    "stylers": [
      { "hue": "#0008ff" },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "weight": 1.5 },
      { "hue": "#f6ff00" },
      { "lightness": 60 }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];
// Create a new StyledMapType object, passing it the array of styles,
// as well as the name to be displayed on the map type control.
  var pinkMapType = new google.maps.StyledMapType(pinkParksStyles,
    {name: "Pink Parks"});
// Setup the click event listeners
  google.maps.event.addDomListener(homeControlDiv, 'click', function() { 
//change
        var latlng = new google.maps.LatLng(
	34.055806, -118.237063);
        var myOptions = {
	  zoom: 13,
	  center: latlng,
	  mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'pink_parks']
    },
	  mapTypeId: google.maps.MapTypeId.ROADMAP,streetViewControl: false,mapTypeControl: false,
		zoomControlOptions: {
		  style: google.maps.ZoomControlStyle.LARGE
		}
	}
var map = new google.maps.Map(document.getElementById("map"), myOptions);
	var fusionlayer = new google.maps.FusionTablesLayer({suppressInfoWindows: true,
clickable: false,
  query: {
    select: 'geometry',
    from: '3901817'
  }
});
var fusionlayerb = new google.maps.FusionTablesLayer({suppressInfoWindows: false,
clickable: true,
  query: {
    select: 'Address',
    from: '1v-yx1YIyg4nNLF72v2XAOFwBHs3hwTera0P1PXc'
  }
});
fusionlayer.setMap(map);
fusionlayerb.setMap(map);
//Associate the styled map with the MapTypeId and set it to display.
map.mapTypes.set('pink_parks', pinkMapType);
map.setMapTypeId('pink_parks');
//Hide Legend		
document.getElementById('map-legend').style.visibility = 'hidden';
//add button
var homeControl = new HomeControl2(homeControlDiv, homeControlDiv4, map);
homeControlDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
  });
}
//Function 2 Revert back to Graphic Maps
function HomeControl2(homeControlDiv, homeControlDiv4, map) {
  // Setup the click event listeners
  google.maps.event.addDomListener(homeControlDiv, 'click', function() {
	//change
 resizeMapDiv();
        var latlng = new google.maps.LatLng(centreLat, centreLon);
        var myOptions = {
            zoom: initialZoom,
            minZoom: 2,
            maxZoom: 3,
            center: latlng,
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            mapTypeControlOptions: { mapTypeIds: ["ImageCutter"] },
	    mapTypeId: "ImageCutter"
        }
        map = new google.maps.Map(document.getElementById("map"), myOptions);
	gmicMapType = new GMICMapType();
        map.mapTypes.set("ImageCutter",gmicMapType);
 	setMarkers(map, beaches);		
		//add buttons
document.getElementById('map-legend').style.visibility = 'visible';
 var homeControl = new HomeControl(homeControlDiv, homeControlDiv4, map);
  homeControlDiv.index = 1;
 map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
    homeControlDiv4.index = 1;
 map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv4);
// Bounds for Go Metro Map
   var allowedBounds = new google.maps.LatLngBounds(
     new google.maps.LatLng(-75, -85), 
     new google.maps.LatLng(83, 85));
// Listen for the bounds_changes event
   google.maps.event.addListener(map, 'bounds_changed', function() {
     if (allowedBounds.contains(map.getCenter())) return;
// Out of bounds - Move the map back within the bounds
     var c = map.getCenter(),
         x = c.lng(),
         y = c.lat(),
         maxX = allowedBounds.getNorthEast().lng(),
         maxY = allowedBounds.getNorthEast().lat(),
         minX = allowedBounds.getSouthWest().lng(),
         minY = allowedBounds.getSouthWest().lat();
     if (x < minX) x = minX;
     if (x > maxX) x = maxX;
     if (y < minY) y = minY;
     if (y > maxY) y = maxY;
     map.setCenter(new google.maps.LatLng(y, x));
   });
  });
}
    //<![CDATA[
    var centreLat=50.0;
    var centreLon=10.0;
    var initialZoom=4;
    var imageWraps=false; //SET THIS TO false TO PREVENT THE IMAGE WRAPPING AROUND
    var map; //the GMap3 itself
    var gmicMapType;
    function GMICMapType() {
        this.Cache = Array();
        this.opacity = 1.0;
    }
    GMICMapType.prototype.tileSize = new google.maps.Size(256, 256);
    GMICMapType.prototype.maxZoom = 19;
    GMICMapType.prototype.getTile = function(coord, zoom, ownerDocument) {
        var c = Math.pow(2, zoom);
        var c = Math.pow(2, zoom);
        var tilex=coord.x,tiley=coord.y;
        if (imageWraps) {
		if (tilex<0) tilex=c+tilex%c;
        	if (tilex>=c) tilex=tilex%c;
        	if (tiley<0) tiley=c+tiley%c;
        	if (tiley>=c) tiley=tiley%c;
	}
	else {
		if ((tilex<0)||(tilex>=c)||(tiley<0)||(tiley>=c))
		{
			var blank = ownerDocument.createElement('DIV');
			blank.style.width = this.tileSize.width + 'px';
			blank.style.height = this.tileSize.height + 'px';
			return blank;
		}
	}
	var img = ownerDocument.createElement('IMG');
        var d = tilex;
        var e = tiley;
        var f = "t";
        for (var g = 0; g < zoom; g++) {
            c /= 2;
            if (e < c) {
                if (d < c) { f += "q" }
                else { f += "r"; d -= c }
            }
            else {
                if (d < c) { f += "t"; e -= c }
                else { f += "s"; d -= c; e -= c }
            }
        }
        img.id = "t_" + f;
        img.style.width = this.tileSize.width + 'px';
        img.style.height = this.tileSize.height + 'px';
        img.src = "rail_map-tiles/"+f+".jpg";
        this.Cache.push(img);
        return img;
    }
    GMICMapType.prototype.realeaseTile = function(tile) {
        var idx = this.Cache.indexOf(tile);
        if(idx!=-1) this.Cache.splice(idx, 1);
        tile=null;
    }
    GMICMapType.prototype.name = "Image Cutter";
    GMICMapType.prototype.alt = "Image Cutter Tiles";
    GMICMapType.prototype.setOpacity = function(newOpacity) {
        this.opacity = newOpacity;
        for (var i = 0; i < this.Cache.length; i++) {
            this.Cache[i].style.opacity = newOpacity; //mozilla
            this.Cache[i].style.filter = "alpha(opacity=" + newOpacity * 100 + ")"; //ie
        }
    }
    function getWindowHeight() {
        if (window.self&&self.innerHeight) {
            return self.innerHeight;
        }
        if (document.documentElement&&document.documentElement.clientHeight) {
            return document.documentElement.clientHeight;
        }
        return 0;
    }
    function resizeMapDiv() {
        //Resize the height of the div containing the map.
        //Do not call any map methods here as the resize is called before the map is created.
        var d=document.getElementById("map");
        var offsetTop=0;
        for (var elem=d; elem!=null; elem=elem.offsetParent) {
            offsetTop+=elem.offsetTop;
        }
        var height=900;
        if (height>=0) {
            d.style.height=height+"px";
        }
    }
var infoWindow = new google.maps.InfoWindow();
//main load
    function load() {
		google.maps.visualRefresh = true;
        resizeMapDiv();
        var latlng = new google.maps.LatLng(centreLat, centreLon);
        var myOptions = {
            zoom: initialZoom,
            minZoom: 2,
            maxZoom: 4,
            center: latlng,
            panControl: true,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            mapTypeControlOptions: { mapTypeIds: ["ImageCutter"] },
	    mapTypeId: "ImageCutter"
        }
		
        map = new google.maps.Map(document.getElementById("map"), myOptions);
	gmicMapType = new GMICMapType();
        map.mapTypes.set("ImageCutter",gmicMapType);
//add button
var homeControlDiv = document.createElement('DIV');
homeControlDiv = document.getElementById('transit');
homeControlDiv.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);
var homeControlDiv4 = document.createElement('DIV4');
homeControlDiv4 = document.getElementById('legend');
homeControlDiv4.index = 1;
map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv4);
//Set Data Group




setMarkers(map, beaches);
///URL Variable Actions
if (second == 2){		
	map.setZoom(2); }	

if (first >= 0){
	var stationIDNum = first;
	google.maps.event.trigger(markersArray[stationIDNum], 'click');
	centerLocation = beaches[stationIDNum];
	stationSelect = new google.maps.LatLng(centerLocation[2], centerLocation[1])
	map.setCenter(stationSelect);
	
	
}
var homeControl = new HomeControl(homeControlDiv, homeControlDiv4, map);
// Bounds for Go Metro Map
var allowedBounds = new google.maps.LatLngBounds(
	new google.maps.LatLng(-85, -150), 
	new google.maps.LatLng(83, 125));
// Listen for the bounds_changes event

google.maps.event.addListener(map, 'bounds_changed', function() {
	if (allowedBounds.contains(map.getCenter())) return;
// Out of bounds - Move the map back within the bounds
var c = map.getCenter(),
x = c.lng(),
y = c.lat(),
maxX = allowedBounds.getNorthEast().lng(),
maxY = allowedBounds.getNorthEast().lat(),
minX = allowedBounds.getSouthWest().lng(),
minY = allowedBounds.getSouthWest().lat();
if (x < minX) x = minX;
if (x > maxX) x = maxX;
if (y < minY) y = minY;
if (y > maxY) y = maxY;
map.setCenter(new google.maps.LatLng(y, x));
	});
}
//set markers
function clearOverlays() {
				    if (markersArray) {
    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
	  if ( i== (markersArray.length-1))
	  {markersArray = [];
	  }
    }
	}
}
function setMarkers(map, locations, category) {
     var image = new google.maps.MarkerImage('images/hotspot_large.png',
     new google.maps.Size(40, 40),
     new google.maps.Point(0,0),
     new google.maps.Point(20, 20));
/* var shadow = new google.maps.MarkerImage('marker-panel.png',
new google.maps.Size(37, 32),
new google.maps.Point(0,0),
new google.maps.Point(0, 32));*/
for (var i = 0; i < locations.length; i++) {
     var beach = locations[i];
     var lefty = beach[1] - 0.5;
     var myLatLng = new google.maps.LatLng(beach[2], lefty);
     var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          //shadow: shadow,
  icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 30,
	  strokeWeight: 5,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0
    },
          title: beach[0],
		  lat: beach[1],
		  lon: beach[2],
          line: beach[3],
          free: beach[4],
          paid: beach[5],
          parking: beach[6],
          lockers: beach[7],
          racks: beach[8],
          connections: beach[9],
          timetable: beach[10],
          yelp: beach[11],
          gmaps: beach[12],
		  ada: beach[13],
		  ev: beach[14]
          });
var stationinfoWindow = new google.maps.InfoWindow();

numClicked = 0;

 google.maps.event.addListener(marker, 'click', function() {

	 
	 var datainfo = this.title;
	 	 var datalat = this.lat;
		 	 var datalon = this.lon;
	 var dataline = this.line;
	 var datafree = this.free;
	 var datapaid = this.paid;
	 var dataparking = this.parking
	 var datalockers = this.lockers;
	 var dataracks = this.racks;
	 var dataconnections = this.connections;
	 var datatimetable = this.timetable;
	 var datayelp = this.yelp;
	 var datagmaps = this.gmaps;
	 var dataada = this.ada;
	 var dataev = this.ev;
	 stationinfoWindow.setContent('<table width="400" border="0" cellspacing="5"><tr><td width="32" align="left" valign="middle"><img src="images/'+dataline+'.jpg" border="0"></td><td width="364" align="left" valign="middle"><font size="5"><b>'+datainfo+'</b></font><br>'+dataline+' Line</td></tr></table><table width="400" border="0" cellspacing="5"><tr><td width="30" align="left"><img src="images/parking.png" border="0"></td><td width="351" valign="middle"><strong>Parking - Free: </strong>'+datafree+'<strong> | Paid:</strong> '+datapaid+'</td></tr><tr><td align="left"><img src="images/parking_spaces.png" border="0"></td><td valign="middle"><strong>Parking Spaces:</strong> '+dataparking+'</td></tr><tr><td align="left"><img src="images/bike_locker.png" border="0"></td><td valign="middle"><strong>Bike Lockers: </strong>'+datalockers+'</td></tr><tr><td align="left"><img src="images/bike_rack.png" border="0"></td><td valign="middle"><strong>Bike Racks: </strong>'+dataracks+'</td></tr><tr><td align="left"><img src="images/transfer.png" border="0"></td><td valign="middle"><strong>Connections: </strong>'+dataconnections+'</td></tr><tr><td align="left"><img src="images/ada.jpg" border="0"></td><td valign="middle"><strong>Accessible Entrances: </strong>'+dataada+'</td></tr><tr><td align="left"><img src="images/ev.jpg" border="0"></td><td valign="middle"><strong>EV Charge Stations: </strong>'+dataev+'</td></tr></table><table border="0" width="400"><tbody><tr><td align="center"><a target="blank" href="http://www.metro.net/'+datatimetable+'"><img src="images/timetable.png" border="0"></a><a target="blank" href="http://maps.google.com/maps/'+datagmaps+'"><img src="images/google_maps.png" border="0"></a><a target="blank" href="http://www.yelp.com/search?find_desc=&amp;find_loc='+datayelp+'&amp;ns=1"><img src="images/yelp.png" border="0"></a></td></tr></tbody></table>');
stationinfoWindow.open(map,this);




	stationSelect = new google.maps.LatLng(datalon, datalat) 

  if ( numClicked > 0 ) {
    marker2.setPosition(stationSelect);
  } else {
	  numClicked = 1;
marker2 = new google.maps.Marker({
  map: map,
  clickable: false,
  position: stationSelect,
  title: 'Some location',
  icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 30,
	  strokeWeight: 0,
	  strokeColor: '#FF0000',
	  strokeOpacity: 0.5,
	   fillColor: '#0099FF',
      fillOpacity: 0.5
    }
});
  }


  });
		  markersArray.push(marker);
}
}  
    //]]>