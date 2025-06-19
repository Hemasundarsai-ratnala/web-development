import java.util.Scanner;
class Index{
	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		boolean found = false;
		System.out.println("Enter No. of Array values:");
		int n= sc.nextInt();
		int a[]= new int[n];
		System.out.println("Enter Array values:");
		for(int i=0;i<n;i++){
			 a[i]= sc.nextInt();
		}
		System.out.println("Enter a value in the Array: ");
        int b = sc.nextInt();
		for(int i=0;i<n;i++){
			if (a[i]==b){
				found = true;
				System.out.println("Index value of "+b+" is "+i);
			}
		}
		if(found==false){
			System.out.println(b+" is not in the array");
		}
		
	}
}
		