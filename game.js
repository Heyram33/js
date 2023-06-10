let play=confirm('shall we playe rock,paper or scissor');

if(play){
    let choice=prompt('Enter ur choice');
    if(choice){
        let ans=choice.trim().toLowerCase();
        if (ans==='rock'|| ans==='paper'|| ans==='scissor')
        {
            let computerans=Math.floor(Math.random()*3+1);
            let comans= computerans===1 ? 'rock': computerans===2 ? 'paper': 'scissor';
            let result= ans===comans ? 'Tie' 
            : ans==='rock' && comans==='paper' ? 'You Win'
            : ans==='rock' && comans==='scissor' ?'You Win'

            : ans==='paper' && comans==='rock'?'You Win'
            : ans==='paper' && comans==='scissor'?'You Loss'

            :ans==='scissor' && comans==='rock'?'You Loss':'You Win';
            alert(result+'\n Computer choice is '+comans);


        }
        else{
            alert('Invalid choice');
        }
    }
    else{
        alert('I guess u changed ur mind.May be next time.');
    }
}
else{
    alert('Ok, may be next time');
}