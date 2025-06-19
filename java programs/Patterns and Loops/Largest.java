import java.util.Scanner;
class Largest{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a value :");
		int a= sc.nextInt();
		System.out.println("Enter b value :");
		int b= sc.nextInt();
		System.out.println("Enter c value :");
		int c= sc.nextInt();
		if((a>b)&&(a>c)){
			System.out.println("Largest value is "+a);
		}
		else if(b>c){
			System.out.println("Largest value is "+b);
		}
		else{
			System.out.println("Largest value is "+c);
		}
		
	}
}