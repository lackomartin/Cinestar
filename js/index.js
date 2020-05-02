class SelectSeat {
    getClickedSeats() {
        const seats = [].slice.call(document.getElementsByClassName('seat'));
        
        function classToggler(selected, e) {
            e.target.classList.toggle(selected);

            const selectedSeats = new SelectedSeats();
            selectedSeats.numberOfSeats();
            selectedSeats.countPrice();
        }

        seats.forEach(seat => {
            seat.addEventListener('click', e => classToggler('selected', e));
        });
    }
}

class SelectedSeats {
    constructor() {
        this.numberOfSelectedSeats;
    }

    numberOfSeats() {
        const selectedSeats = document.getElementsByClassName('selected');
        this.numberOfSelectedSeats = selectedSeats.length - 1;
        const seatsNum = document.getElementById('seats-num');
        seatsNum.innerHTML = this.numberOfSelectedSeats;
    }

    countPrice() {
        const movie = document.getElementById('movie');
        const value = movie.options[movie.selectedIndex].value;
        const price = this.numberOfSelectedSeats * value;
        const seatsPrice = document.getElementById('price');
        seatsPrice.innerHTML = price;
    }
}

class Reservation {
    getTickets() {
        const selectedSeats = document.querySelector('.movie-hall').getElementsByClassName('selected');
        const btn = document.querySelector('.get-tickets');

        btn.addEventListener('click', () => {
            getSeatMark();
            removeClass();
        });

        const getSeatMark = () => {
            const seats = [].slice.call(selectedSeats);
            
            seats.map(seat => {
                console.log(seat.title);
            });
        }

        const removeClass = () => {
            while(selectedSeats[0]) {
                selectedSeats[0].classList.add('occupied');
                selectedSeats[0].classList.remove('selected');
            }
        }
    }
}

const seats = new SelectSeat();
seats.getClickedSeats();

const reservation = new Reservation();
reservation.getTickets();
