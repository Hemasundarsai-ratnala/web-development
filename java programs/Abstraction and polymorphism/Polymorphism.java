class Vehicle{
	void move(){
		System.out.println("Vehicle Moves");
	}
	void Brake(){
		System.out.println("Vehicle Brakes");
	}
}
class Bike extends Vehicle{
		void move(){
			System.out.println("Bike Moves");
		}
		void Brake(){
		System.out.println("Bike Brakes");
	}
}
class Car extends Vehicle{
		void move(){
			System.out.println("Car Moves");
		}
}
class Jeep extends Vehicle{
		void move(){
			System.out.println("Jeep Moves");
		}
}
class Garage{
	void room(Vehicle v){
		v.move();
		v.Brake();
	}
}
class Polymorphism{
	public static void main(String[] args){
		
		// WAY-1
		Vehicle v = new Vehicle();
		v.move();
		Bike b = new Bike();
		b.move();
		Car c = new Car();
		c.move();
		Jeep j = new Jeep();
		j.move();
		
		// WAY-2
		Vehicle v = new Vehicle();
		Bike b = new Bike();
		Car c = new Car();
		Jeep j = new Jeep();
		Garage g=new Garage();
		g.room(v);
		g.room(b);
		g.room(c);
		g.room(j);
		
		// WAY-3
		Garage g= new Garage();
		g.room(new Vehicle ());
		g.room(new Bike ());
		g.room(new Car ());
		g.room(new Jeep ());
		
	}
}
	

		
		
	