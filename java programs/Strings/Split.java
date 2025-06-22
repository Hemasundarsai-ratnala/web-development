import java.util.Scanner;
class Split{
	public static void main(String[] args){
		int words=0;int chars=0;int vowels=0;int lines=0;int special=0;
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter text (type 'exit' to stop):");
		String s1="";
		while (sc.hasNextLine()) {
            s1 = sc.nextLine();
			if (s1.equalsIgnoreCase("exit")) 
				break;
			lines++;
			String[] s2 = s1.split(" ");
			for(String s : s2){
				if(s.isEmpty())
					continue;
				else
					words++;
				for(int i=0;i<s.length();i++){
					char c = s.charAt(i);
					if("aeiouAEIOU".indexOf(c)!=-1)
						vowels++;
					else if ("!@#$%^&*()_-+={}[]|\\;:?/',.<>".indexOf(c) != -1)
	                    special++;
	                if (Character.isLetter(c)) 
	                    chars++;
				}
			}
		}
		int spaces = words-1;
		System.out.println("Words :"+words+" "+"Characters :"+chars+" "+"Spaces :"+spaces+" "+"Lines :"+lines+" "+"Vowels :"+vowels+
		" "+"Special Symbols :"+special);
	}
}