import java.util.Scanner;
class Copy{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter No. of Array values:");
		int n= sc.nextInt();
		int a[]= new int[n];
		System.out.println("Enter Array values:");
		for(int i=0;i<n;i++){
			 a[i]= sc.nextInt();
		}
		int b[]= new int[n];
		for(int i=0;i<n;i++){
			 b[i]= a[i];
		}
		
		System.out.println("New Array values:");
		for(int i=0;i<n;i++){
			System.out.print(b[i]+" ");
		}
	}
}