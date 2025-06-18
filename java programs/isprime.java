import java.util.Scanner;
class isprime{
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a value: ");
        int n = sc.nextInt();
		boolean prime = true;
		if(n<2){
			prime=false;
			
		}
		for(int i=2;i<n;i++){
			if(n%i==0){
				prime=false;
			}
		}
		if (prime==true){
			System.out.println(n+" is a Prime Number");
		}
		else{
			System.out.println(n+" is not a Prime Number");
		}
		
	}
}
		
		