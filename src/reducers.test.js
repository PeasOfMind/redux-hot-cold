import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => {
    //dummy data
    const testState = {
        guesses: [10, 4, 91, 67],
        feedback: "You're Warm.",
        auralStatus: '',
        correctAnswer: 50
    };

    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '_UNKNOWN'});
        //no clue what the correct answer will be (because it is randomized)
        //therefore just replace with new value & check the rest of the object
        state.correctAnswer = 12;
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 12
        });
    });

    it('Should return a current state on an unknown action', () => {
        const currentState = {};
        const state = reducer(currentState, {type:'_UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('generateAuralUpdate', () => {
        it('Should update the aural status', () => {
            let state = testState;
            state = reducer(state, generateAuralUpdate());
            expect(state.auralStatus).toEqual(
                `Here's the status of the game right now: You're Warm. You've made 4 guesses. In order of most- to least-recent, they are: 67, 91, 4, 10`
            );
        });
    });

    describe('restartGame', () => {
        it('Should reset to initial state', () => {
            let state = testState;
            state = reducer(state, restartGame());
            state.correctAnswer = 10;
            expect(state).toEqual({
                guesses: [],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: 10
            });
        });
    });

    describe('makeGuess', () => {
        it('Should record the guess and provide feedback', () => {
            let state = {guesses: [], correctAnswer: 50};
            state = reducer(state, makeGuess(5));
            state = reducer(state, makeGuess(20));
            expect(state.guesses.length).toEqual(2);
            expect(state.guesses).toEqual([5, 20]);
            expect(state.feedback).toEqual("You're Cold...");
        })
    })

})