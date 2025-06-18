import java.util.Scanner;
class Operators{
	void add(int a,int b){
		System.out.println("Addition:"+ (a+b));
	}
	void subtract(int a,int b){
		System.out.println("Subtraction:"+ (a-b));
	}
	void mutliply(int a,int b){
		System.out.println("Multiply:"+ a*b);
	}
	void divison(int a,int b){
		System.out.println("Divison:"+ a/b);
	}
	public static void main(String[] args){
		Scanner s = new Scanner(System.in);
		System.out.println("Enter a:");
		int a= s.nextInt();
		System.out.println("Enter b:");
		int b= s.nextInt();
		Operators o = new Operators();
		o.add(a,b);
		o.subtract(a,b);
		o.mutliply(a,b);
		o.divison(a,b);
	}
}