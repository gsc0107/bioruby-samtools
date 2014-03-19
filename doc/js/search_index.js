var search_data = {"index":{"searchIndex":["bio","db","alignment","pileup","sam","library","tools","sam","tag","vcf","average_coverage()","calmd()","cat()","chromosome_coverage()","depth()","docs()","faidx()","fetch()","fetch_reference()","fetch_with_function()","filename()","fix_mates()","fixmate()","flag_stats()","flagstat()","genotype_list()","idxstats()","index()","index_stats()","int_or_raw()","iupac_to_base()","merge()","mpileup()","new()","new()","new()","new()","non_ref_count()","non_refs()","open()","parse_indel()","parse_line()","phase()","plot_chromosome_coverage()","ref_count()","reheader()","remove_duplicates()","rmdup()","set()","sort()","targetcut()","to_s()","to_vcf()","tview()","view()","license"],"longSearchIndex":["bio","bio::db","bio::db::alignment","bio::db::pileup","bio::db::sam","bio::db::sam::library","bio::db::sam::tools","bio::db::sam","bio::db::tag","bio::db::vcf","bio::db::sam#average_coverage()","bio::db::sam#calmd()","bio::db::sam#cat()","bio::db::sam#chromosome_coverage()","bio::db::sam#depth()","bio::db::sam::docs()","bio::db::sam#faidx()","bio::db::sam#fetch()","bio::db::sam#fetch_reference()","bio::db::sam#fetch_with_function()","bio::db::sam::library::filename()","bio::db::sam#fix_mates()","bio::db::sam#fixmate()","bio::db::sam#flag_stats()","bio::db::sam#flagstat()","bio::db::pileup#genotype_list()","bio::db::sam#idxstats()","bio::db::sam#index()","bio::db::sam#index_stats()","bio::db::vcf#int_or_raw()","bio::db::pileup::iupac_to_base()","bio::db::sam#merge()","bio::db::sam#mpileup()","bio::db::alignment::new()","bio::db::pileup::new()","bio::db::sam::new()","bio::db::vcf::new()","bio::db::pileup#non_ref_count()","bio::db::pileup#non_refs()","bio::db::sam#open()","bio::db::pileup#parse_indel()","bio::db::vcf#parse_line()","bio::db::sam#phase()","bio::db::sam#plot_chromosome_coverage()","bio::db::pileup#ref_count()","bio::db::sam#reheader()","bio::db::sam#remove_duplicates()","bio::db::sam#rmdup()","bio::db::tag#set()","bio::db::sam#sort()","bio::db::sam#targetcut()","bio::db::pileup#to_s()","bio::db::pileup#to_vcf()","bio::db::sam#tview()","bio::db::sam#view()",""],"info":[["Bio","","Bio.html","","<p>Bio::DB::Pileup \n<p>A class representing information in SAMTools pileup format\n<p>Author &mdash; Dan MacLean (dan.maclean@tsl.ac.uk) …\n"],["Bio::DB","","Bio/DB.html","",""],["Bio::DB::Alignment","","Bio/DB/Alignment.html","","<p>Attrobites frp, the flag field (see chapter 2.2.2 of the sam file\ndocumentation) query_strand and mate_strand …\n"],["Bio::DB::Pileup","","Bio/DB/Pileup.html","",""],["Bio::DB::SAM","","Bio/DB/SAM.html","",""],["Bio::DB::SAM::Library","","Bio/DB/SAM/Library.html","",""],["Bio::DB::SAM::Tools","","Bio/DB/SAM/Tools.html","",""],["Bio::DB::Sam","","Bio/DB/Sam.html","",""],["Bio::DB::Tag","","Bio/DB/Tag.html","","<p>a class to represent the SAM OPT values, presented in SAM as\nTAG:VTYPE:VALUE\n"],["Bio::DB::Vcf","","Bio/DB/Vcf.html","",""],["average_coverage","Bio::DB::Sam","Bio/DB/Sam.html#method-i-average_coverage","(chr,start,length)","<p>returns the average coverage over the region queried\n<p>chr - the reference name\n<p>start - the start position …\n"],["calmd","Bio::DB::Sam","Bio/DB/Sam.html#method-i-calmd","(opts={}, &block)","<p>Generate the MD tag. If the MD tag is already present, this command will\ngive a warning if the MD tag …\n"],["cat","Bio::DB::Sam","Bio/DB/Sam.html#method-i-cat","(opts={})","<p>Concatenate BAMs. The sequence dictionary of each input BAM must be\nidentical.\n<p>h - header.sam\n<p>out -[FILE] …\n"],["chromosome_coverage","Bio::DB::Sam","Bio/DB/Sam.html#method-i-chromosome_coverage","(chr,start,length)","<p>returns an array of coverage for each location for which there are mapped\nreads\n<p>chr - the reference name …\n"],["depth","Bio::DB::Sam","Bio/DB/Sam.html#method-i-depth","(opts={})","<p>returns an array for each position with [sequence_name, position, depth]\n<p>b - list of positions or regions …\n"],["docs","Bio::DB::Sam","Bio/DB/Sam.html#method-c-docs","(program, command)","<p>program  - one of &#39;samtools&#39; &#39;bcftools&#39;\n<p>command - one of the commands relevant to the …\n\n"],["faidx","Bio::DB::Sam","Bio/DB/Sam.html#method-i-faidx","(opts={})","<p>Index reference sequence in the FASTA format or extract subsequence from\nindexed reference sequence. …\n"],["fetch","Bio::DB::Sam","Bio/DB/Sam.html#method-i-fetch","(chr, start,stop, &block)","<p>fetches a subsequence and calls code block\n<p>chr - the reference name for the subsequence\n<p>start - the start …\n"],["fetch_reference","Bio::DB::Sam","Bio/DB/Sam.html#method-i-fetch_reference","(chr,start,stop, opts={:as_bio => false})","<p>fetches a subsequence from a reference genome and option returns it as a\nBio::Sequence::NA object\n<p>chr …\n"],["fetch_with_function","Bio::DB::Sam","Bio/DB/Sam.html#method-i-fetch_with_function","(chr, start,stop, &block)",""],["filename","Bio::DB::SAM::Library","Bio/DB/SAM/Library.html#method-c-filename","()","<p>Return the path with the file name of the library for the specific\noperating system\n"],["fix_mates","Bio::DB::Sam","Bio/DB/Sam.html#method-i-fix_mates","(opts={})","<p>Fill in mate coordinates, ISIZE and mate related flags from a name-sorted\nalignment\n<p>out_bam name of outfile …\n"],["fixmate","Bio::DB::Sam","Bio/DB/Sam.html#method-i-fixmate","(opts={})",""],["flag_stats","Bio::DB::Sam","Bio/DB/Sam.html#method-i-flag_stats","(opts={})","<p>generate simple stats with regard to the number and pairing of reads mapped\nto a reference\n"],["flagstat","Bio::DB::Sam","Bio/DB/Sam.html#method-i-flagstat","(opts={})",""],["genotype_list","Bio::DB::Pileup","Bio/DB/Pileup.html#method-i-genotype_list","()","<p>identifies the reference base and returns the indel or snp genotype as\napplicable\n"],["idxstats","Bio::DB::Sam","Bio/DB/Sam.html#method-i-idxstats","()",""],["index","Bio::DB::Sam","Bio/DB/Sam.html#method-i-index","(opts={})","<p>Index sorted alignment for fast random access. Index file\n&lt;aln.bam&gt;.bai will be created of no  …\n"],["index_stats","Bio::DB::Sam","Bio/DB/Sam.html#method-i-index_stats","()","<p>Retrieve and print stats in the index file. The output is TAB delimited\nwith each line consisting of …\n"],["int_or_raw","Bio::DB::Vcf","Bio/DB/Vcf.html#method-i-int_or_raw","(x)","<p>tests if the current variable is an Integer\n<p>x - any variable\n\n"],["iupac_to_base","Bio::DB::Pileup","Bio/DB/Pileup.html#method-c-iupac_to_base","(alt_base)","<p>returns the two bases for the corresponding iupac code\n"],["merge","Bio::DB::Sam","Bio/DB/Sam.html#method-i-merge","(opts={})","<p>Merge multiple sorted alignments\n<p>n - sort by read names\n<p>r - attach RG tag (inferred from file names)\n"],["mpileup","Bio::DB::Sam","Bio/DB/Sam.html#method-i-mpileup","(opts={}, &block)","<p>returns a Bio::DB::Pileup or Bio::DB::VCF object\n<p>region - Only generate pileup in region [chrom:start-stop] …\n"],["new","Bio::DB::Alignment","Bio/DB/Alignment.html#method-c-new","(sam_string)","<p>parses the SAM string into its constituents and set its attributes\n"],["new","Bio::DB::Pileup","Bio/DB/Pileup.html#method-c-new","(pile_up_line)","<p>creates the Pileup object\n\n<pre>pile_up_line = &quot;seq2\\t151\\tG\\tG\\t36\\t0\\t99\\t12\\t...........A\\t:9&lt;;;7=&lt;&lt;&lt;&lt;&lt;&quot; ...</pre>\n"],["new","Bio::DB::Sam","Bio/DB/Sam.html#method-c-new","(args)","<p>Creates a new Bio::DB::Sam object\n<p>fasta [String] - the path to the Fasta reference sequence\n<p>bam [String] …\n"],["new","Bio::DB::Vcf","Bio/DB/Vcf.html#method-c-new","(line=nil, sample_names=nil)","<p>create the vcf object, use the ordered list of sample names to label\nsamples if provided [&#39;A&#39;, …\n"],["non_ref_count","Bio::DB::Pileup","Bio/DB/Pileup.html#method-i-non_ref_count","()","<p>returns the total non-reference bases in the reads at this position\n"],["non_refs","Bio::DB::Pileup","Bio/DB/Pileup.html#method-i-non_refs","()","<p>Calculate the total count of each non-reference nucleotide and return a\nhash of all 4 nt counts returns …\n"],["open","Bio::DB::Sam","Bio/DB/Sam.html#method-i-open","()","<p>backward compatibility method, returns true if file exists otherwise,\ncomplains and quits.\n"],["parse_indel","Bio::DB::Pileup","Bio/DB/Pileup.html#method-i-parse_indel","(alt)","<p>identifies if the indel is an insertion or a deletion\n"],["parse_line","Bio::DB::Vcf","Bio/DB/Vcf.html#method-i-parse_line","(line, sample_names=nil)","<p>gets the info in the Vcf lines and parses it, setting the attributes\n"],["phase","Bio::DB::Sam","Bio/DB/Sam.html#method-i-phase","(opts={})","<p>Call and phase heterozygous SNPs\n<p>A - Drop reads with ambiguous phase.\n<p>b - [STR] Prefix of BAM output.  …\n"],["plot_chromosome_coverage","Bio::DB::Sam","Bio/DB/Sam.html#method-i-plot_chromosome_coverage","(chr,start,length, opts={})","<p>returns an array of coverage for each location for which there are mapped\nreads\n<p>chr - the reference name …\n"],["ref_count","Bio::DB::Pileup","Bio/DB/Pileup.html#method-i-ref_count","()","<p>returns the count of reference-bases in the reads at this position\n"],["reheader","Bio::DB::Sam","Bio/DB/Sam.html#method-i-reheader","(header_sam, opts={})","<p>Replace the header of the current bam file with the header in header_sam\n<p>header_sam - the sam file from …\n"],["remove_duplicates","Bio::DB::Sam","Bio/DB/Sam.html#method-i-remove_duplicates","(opts={})","<p>Remove potential PCR duplicates: if multiple read pairs have identical\nexternal coordinates, only retain …\n"],["rmdup","Bio::DB::Sam","Bio/DB/Sam.html#method-i-rmdup","(opts={})",""],["set","Bio::DB::Tag","Bio/DB/Tag.html#method-i-set","(str)",""],["sort","Bio::DB::Sam","Bio/DB/Sam.html#method-i-sort","(opts={})","<p>Sort alignments by leftmost coordinates\n<p>n - sort by read name\n<p>f - use &lt;out.prefix&gt; as full file name …\n"],["targetcut","Bio::DB::Sam","Bio/DB/Sam.html#method-i-targetcut","(opts={})","<p>Identifies target regions by examining the continuity of read depth,\ncomputes haploid consensus sequences …\n"],["to_s","Bio::DB::Pileup","Bio/DB/Pileup.html#method-i-to_s","()","<p>returns pileup format line\n"],["to_vcf","Bio::DB::Pileup","Bio/DB/Pileup.html#method-i-to_vcf","()","<p>returns basic VCF string as per samtools/misc sam2vcf.pl except that it\nscrimps on the ref for indels, …\n"],["tview","Bio::DB::Sam","Bio/DB/Sam.html#method-i-tview","(opts={})","<p>used to generate a text alignment viewer\n<p>d - display, output as (H)tml or (C)urses or (T)ext\n<p>p - [chr:pos] …\n"],["view","Bio::DB::Sam","Bio/DB/Sam.html#method-i-view","(opts={},&block)","<p>runs the samtools view command\n<p>b - output BAM\n<p>h - print header for the SAM output\n"],["LICENSE","","LICENSE_txt.html","","<p>Copyright © 2011 Raoul J.P. Bonnal\n<p>Permission is hereby granted, free of charge, to any person obtaining …\n"]]}}