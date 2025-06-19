class Var{
	int a = 50; // Global Variables
	void Print(){
		int a = 100;// Local Variable
		System.out.println("Global :" +this.a);
		System.out.println("Local :" +a);
	}
	public static void main(String[] args){
		Var v = new Var();
		v.Print();
	}
}
		