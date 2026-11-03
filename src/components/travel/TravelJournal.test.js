import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import TravelJournal from './TravelJournal';
const places=[
 {id:'test-harbor',name:'Test Harbor',latitude:10,longitude:110,visits:[{date:'2024',companions:'Test friend',note:'First sample memory'},{date:'2025-06',companions:'Test family',note:'Second sample memory'}]},
 {id:'test-ridge',name:'Test Ridge',latitude:20,longitude:-70,visits:[{date:'2023-01-02',companions:'Solo',note:'Other sample memory'}]}
];
test('a red marker opens memories and multiple visits can be browsed',()=>{
 render(<TravelJournal places={places}/>);
 fireEvent.click(screen.getByRole('button',{name:'Open memories from Test Harbor'}));
 expect(screen.getByText('Test friend')).toBeInTheDocument();
 expect(screen.getByText('2024')).toBeInTheDocument();
 expect(screen.getByRole('button',{name:'Previous visit'})).toBeDisabled();
 fireEvent.click(screen.getByRole('button',{name:'Next visit'}));
 expect(screen.getByText('Test family')).toBeInTheDocument();
 expect(screen.getByText('2025-06')).toBeInTheDocument();
 expect(screen.getByRole('button',{name:'Next visit'})).toBeDisabled();
 fireEvent.click(screen.getByRole('button',{name:'Close travel memory'}));
 expect(screen.queryByText('Test family')).not.toBeInTheDocument();
});
test('the place list reveals a destination on the back of the globe and resets the visit',()=>{
 render(<TravelJournal places={places}/>);
 expect(screen.queryByRole('button',{name:'Open memories from Test Ridge'})).not.toBeInTheDocument();
 fireEvent.click(screen.getByRole('button',{name:/Test Ridge/}));
 expect(screen.getByRole('slider',{name:'Globe longitude'})).toHaveValue('-70');
 expect(screen.getByRole('button',{name:'Open memories from Test Ridge'})).toBeInTheDocument();
 expect(screen.getByText('2023-01-02')).toBeInTheDocument();
});
test('markers work with a keyboard and the empty journal invents no visits',()=>{
 const {unmount}=render(<TravelJournal places={places}/>);
 fireEvent.keyDown(screen.getByRole('button',{name:'Open memories from Test Harbor'}),{key:'Enter'});
 expect(screen.getByText('First sample memory')).toBeInTheDocument();
 unmount();
 render(<TravelJournal places={[]}/>);
 expect(screen.getByText('The first page is still waiting for a story.')).toBeInTheDocument();
 expect(screen.queryByRole('button',{name:/Open memories from/})).not.toBeInTheDocument();
});
test('life and trip filters stay separate and missing dates or companions stay omitted',()=>{
 render(<TravelJournal places={[{id:'home',name:'Test Home',latitude:10,longitude:110,kind:'life',visits:[{}]},{...places[1],kind:'travel'}]}/>);
 fireEvent.click(screen.getByRole('button',{name:/Life & stays/}));
 expect(screen.queryByRole('button',{name:/Test Ridge/})).not.toBeInTheDocument();
 fireEvent.click(screen.getByRole('button',{name:'Open memories from Test Home'}));
 expect(screen.queryByText('When',{exact:true})).not.toBeInTheDocument();
 expect(screen.queryByText('With',{exact:true})).not.toBeInTheDocument();
 fireEvent.click(screen.getByRole('button',{name:/Trips/}));
 expect(screen.queryByRole('button',{name:/Test Home/})).not.toBeInTheDocument();
 expect(screen.getByRole('button',{name:/Test Ridge/})).toBeInTheDocument();
});
