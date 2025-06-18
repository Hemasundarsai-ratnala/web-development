import java.util.Scanner;
class Ar_avg{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter No. of Array values:");
		int n= sc.nextInt();
		int a[]= new int[n];
		System.out.println("Enter Array values:");
		for(int i=0;i<n;i++){
			 a[i]= sc.nextInt();
		}
		int sum=0;
		for(int i=0;i<n;i++){
			sum+=a[i];
		}
		int avg = sum/n;
		System.out.println("Average of array values is "+avg);
	}
}
		